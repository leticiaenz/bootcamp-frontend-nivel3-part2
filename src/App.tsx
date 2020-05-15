import React from 'react';
import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';
import GlobolStyle from './styles/global';
import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
      {/* <SignUp /> */}
    </AuthProvider>
    <ToastContainer />
    <GlobolStyle />
  </>
);

export default App;
