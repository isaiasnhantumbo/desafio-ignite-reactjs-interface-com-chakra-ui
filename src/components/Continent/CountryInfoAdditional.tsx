import { Box, BoxProps, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CountryInfoAdditionalProps {
  amount: string;
  children: ReactNode;
}

export function CountryInfoAdditional({
  amount,
  children,
}: CountryInfoAdditionalProps) {
  const MotionBox = motion<BoxProps>(Box);
  return (
    <MotionBox whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
      <Heading
        fontSize={['2xl', '2xl', '5xl']}
        fontWeight={['normal', 'normal', 'semibold']}
        color="highlight"
      >
        {amount}
      </Heading>
      <Text
        as="span"
        color="dark.heading"
        fontWeight={['normal', 'normal', 'semibold']}
        fontSize={['lg', 'lg', '2xl']}
      >
        {children}
      </Text>
    </MotionBox>
  );
}
