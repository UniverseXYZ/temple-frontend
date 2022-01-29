import { Flex, Spacer } from '@chakra-ui/react';
import React from 'react';

import styles from '../CollectionCard.module.sass';

const Footer: React.FC = () => (
  <>
    <div className={styles.footer}>
      <Flex>
        <div className={styles.price}>
          <div>Floor price</div>
          <div>5.6</div>
        </div>
        <Spacer />
        <div className={styles.value}>
          <div>Est. value</div>
          <div>5.6</div>
        </div>
      </Flex>
    </div>
  </>
);

export default Footer;
