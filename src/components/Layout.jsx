import React, { useCallback } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { HeaderPhotosLength } from '../domains/HeaderPhotosLength';
import DisplayLimit from '../domains/DisplayLimit';
import { DisplayAPhoto } from '../domains/DisplayAPhoto';
import { HeaderLink } from '../styles/HeaderLink';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const Header = styled.header`
  height: 150px;
  box-sizing: border-box;
  padding: 20px;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Content = styled.div`
  flex: 1;
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  & > main {
    padding: 1rem;
  }
`;
const Footer = styled.footer`
  padding: 1rem;
  text-align: center;
`;
export default function Layout({ children }) {
  const isActiveLink = useCallback((match, location) => {
    if (!match) {
      return false;
    }
    return location.pathname === '/';
  }, []);
  return (
    <div className="App">
      <Main>
        <Router>
          <Header>
            <Flex>
              <HeaderLink isActive={isActiveLink} to="/">
                Home
              </HeaderLink>
              <HeaderLink to="/photos-by-album">Photos by Album</HeaderLink>
              <HeaderLink to="/users">Users</HeaderLink>
            </Flex>
            <Flex>
              <DisplayAPhoto />
              <HeaderPhotosLength />
              <DisplayLimit />
            </Flex>
          </Header>

          <Content>
            <main>{children}</main>
          </Content>

          <Footer>
            Test réalisé par <a href="https://www.johnbioux.fr">John Bioux</a>
          </Footer>
        </Router>
      </Main>
    </div>
  );
}
