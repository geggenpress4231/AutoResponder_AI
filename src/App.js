import logo from './logo.svg';
import './App.css';
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  const clientId='180373026042-k3hl83vqjhvugsch76dlkltea4u2ckah.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
       <Messenger/>
    </GoogleOAuthProvider>
     
   
  );
}

export default App;
