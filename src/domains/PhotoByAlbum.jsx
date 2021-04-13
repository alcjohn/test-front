import React from 'react';
import styled from 'styled-components';

import usePhotosByAlbums from '../hooks/usePhotosByAlbums';
// Display photos which a title length <= to the limit in parameter

const Style = styled.div`
  color: black;
`;

const PhotosByAlbum = () => {
  const photosByAlbum = usePhotosByAlbums();
  return (
    <Style>
      {photosByAlbum.map((value, key) => {
        return (
          <div key={key}>
            {value.map((photo) => {
              return <div key={photo.id}>{photo.title.toUpperCase()}</div>;
            })}
            <hr />
          </div>
        );
      })}
    </Style>
  );
};

export default PhotosByAlbum;
