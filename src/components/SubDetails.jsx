import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  p {
    color: rgba(0, 0, 0, 0.5);
  }
  .title {
    font-size: 0.7rem;
    font-weight: bold;
    color: black;
  }
`;

export default function SubDetails({ title, children }) {
  return (
    <Box>
      <p className="title">{title}</p>
      {children}
    </Box>
  );
}
