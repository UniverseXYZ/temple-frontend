import React from 'react';

import styles from '../CollectionCard.module.sass';

const Background: React.FC = () => (
  <>
    <div className={styles.image}>
      <img src="/mocks/collection-card-image.png" alt="Background" />
    </div>
  </>
);

export default Background;
