import React from 'react';
import { Box, Link } from '@chakra-ui/react';

import Footer from './Footer';
import styles from '../CollectionCard.module.sass';

interface Props {
  author?: boolean;
  text?: boolean;
}

const Content: React.FC<Props> = (props) => {
  const { author } = props;
  return (
    <>
      <div className={styles.content}>
        <Box pb="15px">
          <div className={styles.title}>Collection Name</div>
          {author && (
            <div className={styles.author}>
              <span>by</span>
              <Link href="#">Creator Name</Link>
            </div>
          )}
        </Box>
        <Footer />
      </div>
    </>
  );
};

Content.defaultProps = {
  author: false,
  text: false,
};

export default Content;
