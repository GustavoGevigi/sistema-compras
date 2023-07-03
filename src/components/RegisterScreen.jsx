import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';

const RegisterScreen = ({ setUserRole }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    const { email, password, role } = formData;

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Registro bem-sucedido
        console.log('Usuário registrado:', userCredential.user);
        console.log('Email:', email);
        console.log('Role:', role);

        // Salvar os dados do usuário no Firestore
        const user = {
          email: userCredential.user.email,
          role: role
        };

        try {
          const docRef = await addDoc(collection(db, 'users'), user);
          console.log('Documento do usuário salvo com ID:', docRef.id);

          // Atualizar a função do usuário no componente pai
          setUserRole(role);
        } catch (error) {
          console.log('Erro ao salvar o documento do usuário:', error);
        }

        // Redirecionar para a página de Login
        navigate('/login');
      })
      .catch((error) => {
        // Ocorreu um erro durante o registro
        console.log('Erro ao registrar:', error);
      });
  };

  useEffect(() => {
    // Limpar o formulário ao montar o componente
    setFormData({
      email: '',
      password: '',
      role: '',
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
                  placeholder="Registre um email válido"
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
                  placeholder="Registre uma senha válida"
                  value={formData.password}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="form3Example4">
                  Senha
                </label>
              </div>

              <div className="form-outline mb-3">
                <select
                  className="form-select form-select-lg"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="">Selecione o tipo de usuário</option>
                  <option value="admin">Administrador</option>
                  <option value="compras">Gerente de Compras</option>
                </select>
                <label className="form-label" htmlFor="form3Example5">
                  Tipo de usuário
                </label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  onClick={handleRegister}
                >
                  Registrar
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Já possui uma conta?{' '}
                  <NavLink className="link-danger" to="/login">
                    Log In
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

export default RegisterScreen;
