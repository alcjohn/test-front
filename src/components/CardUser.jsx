import React, { useMemo } from 'react';
import styled from 'styled-components';
import SubDetails from './SubDetails';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.75rem;
  background-color: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 7px -3px;
  transition: all 0.3s ease-in-out;
  gap: 1.2rem;
  &:hover {
    box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px -3px;
  }
  h3,
  p {
    margin: 0;
  }
  .avatar-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .avatar {
      height: 75px;
      width: 75px;
      font-size: 1.2rem;
      background-color: var(--quinary-light);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      margin-bottom: 0.35rem;
    }
    padding {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;
const Grid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  & > div:first-child {
    grid-column: span 2;
  }
`;
export default function CardUser({
  name,
  email,
  phone,
  company,
  address,
  website,
  username,
}) {
  const letters = useMemo(() => {
    const [firstname, lastname] = name.split(' ');
    return `${firstname[0]}${lastname[0]}`.toUpperCase();
  }, [name]);

  return (
    <Card>
      <div className="avatar-container">
        <div className="avatar">{letters}</div>
      </div>
      <div className="description">
        <h3>{name}</h3>
        <p className="email">{email}</p>
      </div>
      <Grid>
        <SubDetails title="Address">
          {/* <p>{address.suite}</p> */}
          <p>{address.street}</p>
          <p>
            {address.zipcode} {address.city}
          </p>
        </SubDetails>
        <SubDetails title="Phone">
          <p>{phone}</p>
        </SubDetails>
        <SubDetails title="Website">
          <p>{website}</p>
        </SubDetails>
        <SubDetails title="Company">
          <p>{company.name}</p>
          {/* <p>{company.catchPhrase}</p>
          <p>{company.bs}</p> */}
        </SubDetails>
        <SubDetails title="Username">
          <p>{username}</p>
        </SubDetails>
      </Grid>
    </Card>
  );
}
