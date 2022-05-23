import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import cn from 'classnames';
import styles from './.module.sass';
interface Props {
  //
}

export const Description = (props: Props) => {
  //
  const {} = props;
  return (
    <Box fontSize="18px" pt="40px">
      <Text mb="15px">This is FLUF World…</Text>

      <Text mb="15px">
        A metaverse ecosystem of NFT character collectables and a global,
        creative community. From our genesis collection Flufs, to Thingies,
        Party Bears and more to come, we’re building a world that’s yours to
        shape, explore and call home.
      </Text>

      <Text mb="15px">
        Flufs are the collection that started it all. 10,000 3D rabbit avatars,
        programmatically-generated from over 270 traits! Unique by at least
        three degrees of separation, Flufs are yours to trade, collect and
        customise through our growing Scenes & Sounds collection.
      </Text>

      <Text mb="15px">
        But Flufs aren’t just furry faces... Metaverse-ready and full of
        surprises, they’re your ticket to a world of exclusive content, digital
        connectivity, IRL experiences and more.
      </Text>

      <Text mb="15px">Welcome to the Fluffle.</Text>
    </Box>
  );
};
