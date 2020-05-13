import React from 'react';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import GlobolStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SignIn />
    <SignUp />
    <GlobolStyle />
  </>
);

export default App;
