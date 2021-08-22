import { Box, Flex, Heading, Skeleton, SkeletonText } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { ContinentsSlide } from '../components/ContinentsSlide';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { TravelTypes } from '../components/TravelTypes';
import { api } from '../services/api';

interface Continent {
  id: string;
  name: string;
  shortDescription: string;
  continentImage: string;
}
interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <Flex
      w="100%"
      maxWidth={1366}
      h="100vh"
      flexDirection="column"
      align="center"
      mx="auto"
    >
      <Head>
        <title>Home | Worldtrip</title>
      </Head>
      <Header />
      <Hero />
      <Flex my={[9, 9, 20]} align="center" flexDirection="column">
        <TravelTypes />
        <Box
          w="24"
          pt={[9, 9, 20]}
          borderBottom="2px"
          borderColor="dark.heading"
        />
        <SkeletonText isLoaded>
          <Heading
            textAlign="center"
            color="dark.heading"
            fontWeight="medium"
            fontSize={['xl', 'xl', '4xl']}
            marginY={[6, 6, 14]}
          >
            Vamos Nessa? <br /> Então escolha seu continente
          </Heading>
        </SkeletonText>
      </Flex>
      <ContinentsSlide continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/continent')

  const continents = response.data.map((continent) => {
    return {
      id: continent.id,
      name: continent.name,
      shortDescription: continent.shortDescription,
      continentImage: continent.continentImage,
    };
  });

  return {
    props: {
      continents,
    },
    revalidate: 60 * 60 * 48, //48horas
  };
};
