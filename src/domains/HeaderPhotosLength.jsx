import React from 'react';
import { useRecoilValue } from 'recoil';
import { photosState } from '../store/selector';

export const HeaderPhotosLength = () => {
  const photos = useRecoilValue(photosState);
  return <div>{photos.length}</div>;
};
