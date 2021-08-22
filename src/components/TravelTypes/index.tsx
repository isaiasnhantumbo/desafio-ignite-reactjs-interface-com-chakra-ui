import { Box, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import ItemType from './ItemType';

export function TravelTypes() {
  return (
    <SimpleGrid
      spacing={['6', '6', '36']}
      columns={[2, 2, 5]}
      alignItems="center"
      justifyItems="center"
    >
      <ItemType ImageSrc="/cocktail.svg" ImageAlt="Cocktail">
        vida noturna
      </ItemType>
      <ItemType ImageSrc="/beach.svg" ImageAlt="Praia">
        praia
      </ItemType>
      <ItemType ImageSrc="/building.svg" ImageAlt="Edifício">
        moderno
      </ItemType>
      <ItemType ImageSrc="/museum.svg" ImageAlt="Museu">
        clássico
      </ItemType>
      <ItemType ImageSrc="/earth.svg" ImageAlt="Mundo">
        e mais...
      </ItemType>
    </SimpleGrid>
  );
}
