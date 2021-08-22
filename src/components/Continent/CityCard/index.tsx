import { Flex, FlexProps, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CityInfo } from './CityInfo';

interface CityCardProps {
  cityImage: string;
  cityName: string;
  countryName: string;
  countryFlag: string;
}

export function CityCard({
  cityImage,
  cityName,
  countryName,
  countryFlag,
}: CityCardProps) {
  const MotionFlex = motion<FlexProps>(Flex);
  return (
    <MotionFlex
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      flexDir="column"
      bg="white"
      width="256px"
      borderBottom="1px"
      borderBottomColor="rgba(255, 186, 8, 0.5)"
      borderLeft="1px"
      borderLeftColor="rgba(255, 186, 8, 0.5)"
      borderRight="1px"
      borderRightColor="rgba(255, 186, 8, 0.5)"
      borderBottomRadius="4px"
    >
      <Image
        height="173px"
        borderTopRadius="4px"
        src={cityImage}
        alt={cityName}
      />
      <CityInfo
        city={cityName}
        country={countryName}
        countryFlag={countryFlag}
      />
    </MotionFlex>
  );
}
