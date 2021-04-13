import { selector } from 'recoil';

export const photosState = selector({
  key: 'photos',
  get: () => {
    return fetch('https://jsonplaceholder.typicode.com/photos').then((r) =>
      r.json()
    );
  },
});

export const usersState = selector({
  key: 'users',
  get: () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then((r) =>
      r.json()
    );
  },
});
