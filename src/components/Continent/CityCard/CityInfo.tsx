import { Avatar, Container, Heading, Stack, Text } from '@chakra-ui/react';

interface CityInfoProps {
  country: string;
  city: string;
  countryFlag: string;
}

export function CityInfo({ city, country, countryFlag }: CityInfoProps) {
  return (
    <Stack
      flexDir="row"
      paddingX="6"
      paddingBottom="6"
      align="center"
      justify="center"
    >
      <Container padding="0">
        <Heading
          fontFamily="Barlow"
          fontWeight="semibold"
          fontSize="xl"
          lineHeight="base"
          color="dark.heading"
          marginTop="5"
        >
          {country}
        </Heading>
        <Text
          marginTop="3"
          fontFamily="Barlow"
          fontWeight="medium"
          color="dark.info"
          lineHeight="tall"
        >
          {city}
        </Text>
      </Container>
      <Avatar height="30px" width="30px" src={countryFlag} />
    </Stack>
  );
}
