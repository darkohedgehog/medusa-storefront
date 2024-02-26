import InteractiveLink from "@modules/common/components/interactive-link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default async function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Stranica ne postoji</h1>
      <p className="text-small-regular text-ui-fg-base">
        Stranica koju tražite ne postoji.
      </p>
      <InteractiveLink href="/">Na naslovnu stranu</InteractiveLink>
    </div>
  )
}
