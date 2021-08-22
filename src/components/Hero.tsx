import {
  Box,
  Flex,
  Heading,
  Image,
  ImageProps,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export function Hero() {
  const MotionImage = motion<ImageProps>(Image);
  const isWideVersion = useBreakpointValue({ base: false, lg: true });
  return (
    <Flex
      as="main"
      backgroundImage="url('/bg-hero-img.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      w="100%"
      h={80}
      flex="1"
    >
      <Flex
        justifyContent="space-between"
        paddingY={['10', '10', '20']}
        paddingX={['4', '4', '32']}
      >
        <Box>
          <Heading
            fontSize={['xl', '4xl']}
            fontWeight="medium"
            color="light.heading"
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Heading>
          <Text
            fontSize={['sm', 'xl']}
            color="light.info"
            paddingTop={['2', '2', '5']}
            lineHeight="8"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        {isWideVersion && (
          <MotionImage
            src="/airplane.svg"
            alt="Avião"
            marginBottom="auto"
            ml="48"
            initial={{ scale: -5, rotate: 0 }}
            animate={{ rotate: 0, scale: 1 }}
          />
        )}
      </Flex>
    </Flex>
  );
}
