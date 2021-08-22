import { Flex, Heading } from '@chakra-ui/react';

interface CityBannerProps {
  name: string;
  image: string;
}

export function CityBanner({ name, image }: CityBannerProps) {
  return (
    <Flex
      height={['375px', '375px', '500px']}
      mx="auto"
      width="100%"
      maxWidth={1366}
      bgPosition="100% 30%"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgImage={`url('${image}')`}
    >
      <Heading
        color="light.heading"
        mx={['auto', 'auto', '32']}
        my={['auto', 'auto', '96']}
        fontWeight="semibold"
        fontSize={['3xl', '3xl', '5xl']}
      >
        {name}
      </Heading>
    </Flex>
  );
}
