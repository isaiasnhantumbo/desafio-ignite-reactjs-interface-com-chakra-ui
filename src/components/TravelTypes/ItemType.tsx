import {
  Box,
  Image,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface ItemTypeProps {
  ImageSrc: string;
  ImageAlt: string;
  children: string;
}

export default function ItemType({
  ImageAlt,
  ImageSrc,
  children,
}: ItemTypeProps) {
  const MotionStack = motion<StackProps>(Stack);
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <MotionStack
      direction={['row', 'column']}
      align="center"
      justify="center"
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
    >
      {!isWideVersion && <Image src="/elipse.svg" alt="Ponto amarelo" />}
      {isWideVersion && <Image src={ImageSrc} alt={ImageAlt} />}
      <Text fontWeight="medium" mt="6" color="dark.heading" lineHeight="6">
        {children}
      </Text>
    </MotionStack>
  );
}
