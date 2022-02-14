import React, { useRef } from 'react';
import { Container, Heading, Box } from '@chakra-ui/react';
import { RoundButton } from '@/components/ui';
import { CollectionCard } from '@/components/common';
import { LeftArrow, RightArrow } from '@/components/icons';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import initialData from '@/mocks/data';

const CuratedCollections = () => {
  const collections = initialData.collections.slice(0, 6);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <Container maxW="1142px">
        <Heading as="h2" size="lg" mb="40px">
          Curated collections
        </Heading>
      </Container>

      <Container maxW="1200px" pb="130px">
        <Box position="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            spaceBetween={30}
            slidesPerView={4}
            pagination={{
              dynamicBullets: true,
            }}
            style={{ padding: '30px 29px' }}
            loop={true}
            allowTouchMove={false}
          >
            {collections.map((item, index) => (
              <SwiperSlide key={index}>
                <CollectionCard collection={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <RoundButton
            className="swiper-button swiper-button-prev"
            ref={prevRef}
            icon={<LeftArrow />}
          />

          <RoundButton
            className="swiper-button swiper-button-next"
            ref={nextRef}
            icon={<RightArrow />}
          />
        </Box>
      </Container>
    </>
  );
};

export default CuratedCollections;
