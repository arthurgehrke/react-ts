import React from 'react';

import GlobalStyle from './styles/globals';

import SignIn from './pages/SignIn';

const App: React.FC = () => (
  <>
    <h1>Hello World</h1>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
