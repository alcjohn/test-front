import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { limitState } from '../store/atom';

const DisplayLimit = () => {
  const [limit, setLimit] = useRecoilState(limitState);

  const onChange = useCallback(
    (e) => {
      setLimit(e.target.value);
    },
    [setLimit]
  );

  return (
    <div>
      <select onChange={onChange} value={limit}>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={35}>35</option>
        <option value={50}>50</option>
      </select>
      {limit}
    </div>
  );
};

DisplayLimit.propTypes = {};

export default DisplayLimit;
