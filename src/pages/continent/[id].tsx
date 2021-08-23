import useSWR from 'swr';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { WarningIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Skeleton,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { CityCard } from '../../components/Continent/CityCard';
import { CityBanner } from '../../components/Continent/CityBanner';
import { CountryInfoAdditional } from '../../components/Continent/CountryInfoAdditional';
import { Header } from '../../components/Header';
import { api } from '../../services/api';

interface City {
  countryName: string;
  name: string;
  flag: string;
  image: string;
}

interface Continent {
  name: string;
  description: string;
  countries: string;
  languages: string;
  city: string;
  cityBannerImage: string;
  cities: City[];
}

export default function Continent() {
  const [continent, setContinent] = useState<Continent>();
  const router = useRouter();

  const { id } = router.query;

  const fetcher = async (url: string) =>
    api.get(url).then((response) => setContinent(response.data));

  useSWR(`/continent/${id}`, fetcher, {
    loadingTimeout: 8000,
  });

  if (!continent)
    return (
      <Skeleton startColor="highlight" endColor="dark.heading" height="100px" />
    );

  return (
    <Box>
      <Header />
      <CityBanner name={continent.name} image={continent.cityBannerImage} />
      <Flex
        maxWidth={1366}
        marginX="auto"
        marginY={['4', '4', '20']}
        flexDirection="column"
      >
        <Flex
          align="center"
          marginLeft={['auto', 'auto', '32']}
          flexDirection={['column', 'column', 'row']}
          paddingY="6"
          paddingX={['4', '4', null]}
        >
          <Text
            maxW={600}
            paddingRight={['auto', 'auto', '10']}
            fontSize={['sm', 'sm', '2xl']}
            textAlign="justify"
            lineHeight={['base', 'base', '9']}
            color="dark.heading"
          >
            {continent.description}
          </Text>

          <SimpleGrid
            align="center"
            justify="center"
            ml={[null, null, '8']}
            columns={3}
            spacing="42px"
          >
            <CountryInfoAdditional amount={continent.countries}>
              países
            </CountryInfoAdditional>
            <CountryInfoAdditional amount={continent.languages}>
              línguas
            </CountryInfoAdditional>
            <CountryInfoAdditional amount={continent.city}>
              cidades
              <Tooltip label="+100" closeDelay={200}>
                <Icon marginLeft="1.5" fontSize="sm" icon={<WarningIcon />} />
              </Tooltip>
            </CountryInfoAdditional>
          </SimpleGrid>
        </Flex>

        <Flex flexDirection="column" mx={[null, null, 'auto']}>
          <Heading
            fontWeight="medium"
            fontSize={['2xl', '2xl', '4xl']}
            color="dark.heading"
            marginBottom={['5', '5', '10']}
            marginLeft={['4', '4', null]}
          >
            Cidades 
          </Heading>
          <SimpleGrid
            columns={[1, 1, 4]}
            spacing={['20px', '20px', '46px']}
            mx="auto"
          >
            {continent.cities.map((city) => (
              <CityCard
                key={city.name}
                cityImage={city.image}
                cityName={city.name}
                countryName={city.countryName}
                countryFlag={city.flag}
              />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Box>
  );
}
