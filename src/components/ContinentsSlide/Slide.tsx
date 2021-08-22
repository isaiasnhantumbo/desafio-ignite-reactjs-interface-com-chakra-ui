import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface SlideProps {
  continentSlug: string;
  continentName: string;
  continentImage: string;
  continentShortDescription: string;
}

export function Slide({
  continentShortDescription,
  continentImage,
  continentName,
  continentSlug,
}: SlideProps) {
  return (
    <Flex
      w="100%"
      height={['250px', '250px', '450px']}
      backgroundPosition="100% 30%"
      backgroundRepeat="no-repeat"
      bgSize="cover"
      bgImage={`url('${continentImage}')`}
      align="center"
      justify="center"
      direction="column"
    >
      <Link href={`/continent/${continentSlug}`}>
        <a>
          <Heading
            color="light.heading"
            fontSize={['2xl', '2xl', '5xl']}
            lineHeight="10"
          >
            {continentName}
          </Heading>
        </a>
      </Link>
      <Text
        color="light.info"
        mt="4"
        fontWeight="bold"
        fontSize={['sm', 'sm', '2xl']}
      >
        {continentShortDescription}
      </Text>
    </Flex>
  );
}
