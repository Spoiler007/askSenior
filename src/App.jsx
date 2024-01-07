import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Navbar from './components/Navbar';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
