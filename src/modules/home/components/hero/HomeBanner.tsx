import bannerImg from "../../../../../public/assets/herobanner1.png";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <div>
      <Image src={bannerImg} 
      alt="banner image" 
      width={1400}
      height={650}
      priority={false}
      className="w-full max-h-[650px] object-cover mt-20 pt-20" />
    </div>
    
  );
};

export default HomeBanner;