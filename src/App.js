// App.js

import './App.css';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';
import { useLocation, useNavigate, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import Home from './components/Home';
import Fornecedores from './components/Fornecedores';
import FornecedoresAdd from './components/FornecedoresAdd';
import Produtos from './components/Produtos';
import Contatos from './components/Contatos';
import Cotacoes from './components/Cotacoes';
import NotFoundPage from './components/NotFoundPage';
import { UserContext } from './UserContext';

function App() {

  const [userRole, setUserRole] = useState(null);
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const navigate = useNavigate();

  const hideHeaderRoutes = ['/login', '/register'];

  useEffect(() => {
    if (!loading && !user && !hideHeaderRoutes.includes(location.pathname)) {
      navigate('/login');
    }
  }, [user, loading, location.pathname, navigate]);

  return (
    <UserContext.Provider value={{ userRole, setUserRole }}>
      <>
        {!hideHeaderRoutes.includes(location.pathname) && <Header />}
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/fornecedores" element={<Fornecedores />} />
          <Route path="/fornecedores/add" element={<FornecedoresAdd />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/cotacoes" element={<Cotacoes />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </>
    </UserContext.Provider>
  );
}

export default App;
