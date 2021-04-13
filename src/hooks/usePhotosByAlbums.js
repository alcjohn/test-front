import { useEffect, useState, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { photosState } from '../store/selector';
import { limitState } from '../store/atom';
import groupBy from '../utils/groupBy';

const usePhotosByAlbums = () => {
  const [array, setArray] = useState([]);
  const photos = useRecoilValue(photosState);
  const limit = useRecoilValue(limitState);
  const photosSorted = useMemo(() => {
    const array = [...photos];
    array.sort((a, b) =>
      Math.min(Math.max(a.title.length - b.title.length, -1), 1)
    );
    return array;
  }, [photos]);
  useEffect(() => {
    var t0 = performance.now();
    const dataSorted = photosSorted.filter((v) => v.title.length <= limit);
    const albums = Object.values(groupBy(dataSorted, 'albumId'));
    setArray(albums);
    var t1 = performance.now();
    console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');
  }, [limit, photosSorted]);
  return array;
};
export default usePhotosByAlbums;
