import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';

import { RoundButton } from '@/components/ui';
import { CollectionCard } from '@/components/common';
import { AngleLeftIcon, AngleRightIcon } from '@/components/icons';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IOwnedCollections } from '../../OwnedCollections';

export const Slider = ({ collections }: any) => {
  //
  const [prevRef, setPrevRef] = useState<HTMLDivElement | null>(null);
  const [nextRef, setNextRef] = useState<HTMLDivElement | null>(null);

  function getPrevRef(node: HTMLDivElement): void {
    setPrevRef(node);
  }

  function getNextRef(node: HTMLDivElement): void {
    setNextRef(node);
  }

  return (
    <Box position="relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef,
          nextEl: nextRef,
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
        {collections.map((item: IOwnedCollections, index: number) => (
          <SwiperSlide key={index}>
            <CollectionCard 
              showAuthor={false}
              showText={false}
              showFooter={true}
              collection={item.collection}
              ownership={item.ownership.tokenCount}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <RoundButton
        className="swiper-button swiper-button-prev"
        ref={getPrevRef}
        icon={<AngleLeftIcon />}
      />

      <RoundButton
        className="swiper-button swiper-button-next"
        ref={getNextRef}
        icon={<AngleRightIcon />}
      />
    </Box>
  );
};
