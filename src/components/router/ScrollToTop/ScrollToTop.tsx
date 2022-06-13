import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

export const ScrollToTop = (props: any) => {
  //
  const { children } = props;
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};
