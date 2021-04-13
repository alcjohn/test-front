import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import CardUser from '../components/CardUser';
import { usersState } from '../store/selector';

const Box = styled.div`
  display: grid;
  gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default function Users() {
  const users = useRecoilValue(usersState);

  return (
    <Suspense callback={<div>Loading...</div>}>
      <Box>
        {users.map((user) => (
          <CardUser key={user.id} {...user} />
        ))}
      </Box>
    </Suspense>
  );
}
