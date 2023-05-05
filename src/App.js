import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import AuthRoutes from './routes/authRoute';

function App() {

  // api url
  const API_URL = "https://twitter-clone-server-6e8b.onrender.com";

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login API_URL={API_URL}  />} />
        <Route path='/register' element={<Register API_URL={API_URL} />} />
        <Route path='/*' element={<AuthRoutes API_URL={API_URL} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
