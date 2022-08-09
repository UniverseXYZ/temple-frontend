import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={1102}
    height={556}
    viewBox="0 0 1102 556"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    opacity={0.5}
    {...props}
  >
    <rect x="0" y="0" rx="12" ry="12" width="354" height="137" />
    <rect x="0" y="157" rx="12" ry="12" width="541" height="399" />
    <rect x="561" y="157" rx="12" ry="12" width="541" height="399" />
    <rect x="374" y="0" rx="12" ry="12" width="354" height="137" />
    <rect x="748" y="0" rx="12" ry="12" width="354" height="137" />
  </ContentLoader>
);
