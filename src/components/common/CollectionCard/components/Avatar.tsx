import React from 'react';

import styles from '../CollectionCard.module.sass';

const Avatar: React.FC = () => (
  <>
    <div className={styles.avatar}>
      <img src="/mocks/collection-card-avatar.png" alt="Avatar" />
    </div>
  </>
);

export default Avatar;
