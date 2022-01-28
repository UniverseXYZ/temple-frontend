import React, { FC } from 'react';
import Image from 'next/image';

import styles from './Layout.module.sass';
import background from '@/assets/images/main-bg.jpg';
import gradient from '@/assets/images/top-main-bg.png';

const Background: FC = () => (
  <>
    <div className={styles.bgWrap}>
      <Image
        src={background}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Universe | Temple"
      />
      <Image
        src={gradient}
        layout="responsive"
        quality={100}
        alt="Universe | Temple"
      />
    </div>
  </>
);

export default Background;
