import React, { useState, useEffect } from 'react';

export const DisplayAPhoto = () => {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/1')
      .then((d) => d.json())
      .then((data) => {
        setPhoto(data);
      });
  }, []);

  if (!photo) {
    return null;
  }
  return <img width="50" src={photo.url} alt={photo.title} />;
};
