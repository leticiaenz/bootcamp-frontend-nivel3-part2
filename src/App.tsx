import React from 'react';
import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';
import GlobolStyle from './styles/global';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
      {/* <SignUp /> */}
    </AuthProvider>

    <GlobolStyle />
  </>
);

export default App;
