import { Product } from "@medusajs/medusa"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import { getCollectionsList, getProductsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import { getRegion } from "app/actions"
import { ProductCollectionWithPreviews } from "types/global"
const Hero = dynamic(() => import('@modules/home/components/hero'), { ssr: true });
const NewArrival = dynamic(() => import("@modules/home/components/NewArrivals"), { ssr: false });
const InfoBanner = dynamic(() => import("@modules/home/components/InfoBanner"), { ssr: false });
const BestSellers = dynamic(() => import("@modules/home/components/BestSellers"), { ssr: false });
const HomeBanner = dynamic(() => import("@modules/home/components/HomeBanner"), { ssr: false });
const CategoryBanner = dynamic(() => import("@modules/home/components/CategoryBanner"), { ssr: false });





export const metadata: Metadata = {
  title: "Živić-Elektro",
  description:
    "Veleprodaja i maloprodaja elektro materijala",
}

const getCollectionsWithProducts = async (
  countryCode: string
): Promise<ProductCollectionWithPreviews[] | null> => {
  const { collections } = await getCollectionsList(0, 3).then(
    (collections) => collections
  )

  if (!collections) {
    return null
  }

  const collectionIds = collections.map((collection) => collection.id)

  await Promise.all(
    collectionIds.map((id) =>
      getProductsList({
        queryParams: { collection_id: [id] },
        countryCode,
      })
    )
  ).then((responses) =>
    responses.forEach(({ response, queryParams }) => {
      let collection

      if (collections) {
        collection = collections.find(
          (collection) => collection.id === queryParams?.collection_id?.[0]
        )
      }

      if (!collection) {
        return
      }

      collection.products = response.products as unknown as Product[]
    })
  )

  return collections as unknown as ProductCollectionWithPreviews[]
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <NewArrival />
      <InfoBanner />
      <HomeBanner />
      <CategoryBanner />
      <BestSellers />
      {<div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>}
    </>
  )
}
