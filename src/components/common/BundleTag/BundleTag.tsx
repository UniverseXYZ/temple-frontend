import React from 'react';
import cn from 'classnames';

import styles from './BundleTag.module.sass';

type Props = {
  className?: string;
};

const BundleTag: React.FC<Props> = ({ className }) => (
  <>
    <div className={cn(styles.bundle, className)}>3</div>
  </>
);

export default BundleTag;
