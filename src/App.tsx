import React from 'react';
import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';
import GlobolStyle from './styles/global';
import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Leticia' }}>
      <SignIn />
      {/* <SignUp /> */}
    </AuthContext.Provider>

    <GlobolStyle />
  </>
);

export default App;
