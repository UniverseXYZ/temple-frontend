import { Container, Heading, HStack } from '@chakra-ui/react';
import { CollectionCard } from '@/components/common';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import initialData from '@/mocks/data';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CommunityCuratedCollections = () => {
  const collections = initialData.collections.slice(0, 6);

  return (
    <>
      <Container maxW="1142px" pb="130px">
        <Heading as="h2" size="lg" mb="40px">
          Community curated collections
        </Heading>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={30}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {collections.map((item, index) => (
            <SwiperSlide key={index}>
              <CollectionCard collection={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default CommunityCuratedCollections;
