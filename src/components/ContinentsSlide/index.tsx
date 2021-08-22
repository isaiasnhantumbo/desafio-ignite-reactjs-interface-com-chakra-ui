import { Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Slide } from './Slide';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface Continent {
  id: string;
  name: string;
  shortDescription: string;
  continentImage: string;
}
interface ContinentsSlideProps {
  continents: Continent[];
}

export function ContinentsSlide({ continents }: ContinentsSlideProps) {
  return (
    <Flex w="100%" maxW="1240px" paddingBottom={['5', '5', '10']}>
      <Swiper
        effect="fade"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <Slide
              continentSlug={continent.id}
              continentName={continent.name}
              continentImage={continent.continentImage}
              continentShortDescription={continent.shortDescription}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
