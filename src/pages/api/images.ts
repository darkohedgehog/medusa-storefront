import type { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';

// Konfiguracija Cloudinary-a
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

// Tip za odgovor
type ApiResponse = {
  images?: string[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  try {
    const { resources } = await cloudinary.search
      .expression('tags=hero')
      .sort_by('public_id', 'desc')
      .max_results(30)
      .execute();

    const imageUrls = resources.map((file: { secure_url: any; }) => file.secure_url);
    res.status(200).json({ images: imageUrls });
  } catch (error) {
    // Ovde se pretpostavlja da je `error` tipa `Error`
    res.status(500).json({ error: (error as Error).message || 'Greška pri pretraživanju slika' });
  }
}
