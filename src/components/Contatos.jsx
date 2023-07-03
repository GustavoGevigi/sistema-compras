import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const Contatos = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [contatoForm, setContatoForm] = useState({
    fornecedor: '',
    telefone: '',
    email: '',
  });
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    const fetchFornecedores = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'fornecedores'));
        const data = querySnapshot.docs.map((doc) => {
          const fornecedorData = doc.data();
          return { id: doc.id, nome: fornecedorData.nome };
        });
        setFornecedores(data);
      } catch (error) {
        console.error('Erro ao buscar fornecedores:', error);
      }
    };

    fetchFornecedores();
  }, []);

  useEffect(() => {
    const fetchContatos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'contatos'));
        const data = querySnapshot.docs.map((doc) => {
          const contatoData = doc.data();
          return { id: doc.id, ...contatoData };
        });
        setContatos(data);
      } catch (error) {
        console.error('Erro ao buscar contatos:', error);
      }
    };

    fetchContatos();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContatoForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleRegistrarContatos = async () => {
    try {
      // Salvar os novos contatos no Firestore
      await addDoc(collection(db, 'contatos'), contatoForm);

      // Limpar os campos após o registro
      setContatoForm({
        fornecedor: '',
        telefone: '',
        email: '',
      });

      // Recarregar a página
      handleReloadPage();
    } catch (error) {
      console.error('Erro ao registrar contatos:', error);
    }
  };

  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Fornecedores
        </span>
        <select
          className="form-select"
          aria-label="Default select example"
          name="fornecedor"
          value={contatoForm.fornecedor}
          onChange={handleInputChange}
        >
          <option value="">Clique para selecionar o fornecedor</option>
          {fornecedores.map((fornecedor) => (
            <option key={fornecedor.id} value={fornecedor.id}>
              {fornecedor.nome}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Telefone
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Insira o telefone"
          aria-label="Telefone"
          aria-describedby="basic-addon1"
          name="telefone"
          value={contatoForm.telefone}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          E-mail
        </span>
        <input
          type="email"
          className="form-control"
          placeholder="Insira o e-mail"
          aria-label="E-mail"
          aria-describedby="basic-addon1"
          name="email"
          value={contatoForm.email}
          onChange={handleInputChange}
        />
      </div>

      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={handleRegistrarContatos}
      >
        Registrar Contatos
      </button>

      <div className="list-group mt-3">
        {fornecedores.map((fornecedor, index) => {
          const contato = contatos.find((contato) => contato.fornecedor === fornecedor.id);
          return (
            <div className="card" key={index}>
              <div className="card-header">{fornecedor.nome}</div>
              <div className="card-body">
                <h5 className="card-title">Telefone:</h5>
                <p className="card-text">{contato?.telefone}</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Email:</h5>
                <p className="card-text">{contato?.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contatos;
