import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderLink = styled(NavLink)`
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-decoration: none;
  position: relative;
  &.active {
    &::after {
      width: 100%;
    }
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    transform: translateX(-50%);
    margin-left: 50%;
    background-color: var(--primary-light);
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
