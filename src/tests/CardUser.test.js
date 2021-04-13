import { render, screen } from '@testing-library/react';

import CardUser from '../components/CardUser';
const fakeUser = {
  name: 'John Bioux',
  email: 'tugudu@email.com',
  id: 1,
  phone: '0678743555',
  company: { name: 'paygreen' },
  address: {
    street: '1033 avenue du pic saint-loup',
    city: 'Montpellier',
    zipcode: '34090',
  },
  website: 'johnbioux.fr',
};

it('name', () => {
  render(<CardUser {...fakeUser} />);
  const h3 = document.querySelector('h3');
  expect(h3.textContent).toBe(fakeUser.name);
});

it('email', () => {
  render(<CardUser {...fakeUser} />);
  render(<CardUser {...fakeUser} />);
  const email = document.querySelector('.email');
  expect(email.textContent).toBe(fakeUser.email);
});

it('avatar', () => {
  render(<CardUser {...fakeUser} />);
  const avatar = document.querySelector('.avatar');
  expect(avatar.textContent).toBe('JB');
});

it('phone', () => {
  render(<CardUser {...fakeUser} />);

  const phone = screen.getByText(fakeUser.phone);
  expect(phone).toBeInTheDocument();
});
it('company', () => {
  render(<CardUser {...fakeUser} />);

  const company = screen.getByText(fakeUser.company.name);
  expect(company).toBeInTheDocument();
});
it('address', () => {
  render(<CardUser {...fakeUser} />);

  const street = screen.getByText(fakeUser.address.street);
  const city = screen.getByText(
    `${fakeUser.address.zipcode} ${fakeUser.address.city}`
  );

  expect(street).toBeInTheDocument();
  expect(city).toBeInTheDocument();
});
