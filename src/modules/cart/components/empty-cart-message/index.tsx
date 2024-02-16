import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-48 px-2 flex flex-col justify-center items-start">
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        Košarica
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        Nemate ništa u košarici. Kliknite na link ispod kako biste pretražili proizvode.
      </Text>
      <div>
        <InteractiveLink href="/store">Traži proizvode</InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
