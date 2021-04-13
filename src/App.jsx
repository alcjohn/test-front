import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import PhotosByAlbum from './domains/PhotoByAlbum';
import Users from './domains/Users';
import Layout from './components/Layout';
import { Home } from './domains/Home';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Chargement ...</div>}>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/photos-by-album">
              <PhotosByAlbum />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </Layout>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
