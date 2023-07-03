import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Autenticação bem-sucedida
        console.log('Usuário autenticado:', userCredential.user);

        // Redirecionar para a página Home
        navigate('/home');
      })
      .catch((error) => {
        // Ocorreu um erro durante a autenticação
        console.log('Erro ao autenticar:', error);
      });
  };

  useEffect(() => {
    // Limpar o formulário ao montar o componente
    setFormData({
      email: '',
      password: ''
    });
  }, []);

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name="email"
                  placeholder="Insira um email válido"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="form3Example3">
                  Endereço de Email
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  name="password"
                  placeholder="Insira uma senha válida"
                  value={formData.password}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="form3Example4">
                  Senha
                </label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  onClick={handleLogin}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Não possui uma conta?{' '}
                  <NavLink className="link-danger" to="/register">
                    Registrar
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;
