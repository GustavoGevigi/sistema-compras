import { useState } from 'react';
import firebase from '../firebaseConfig';
import { db } from '../firebaseConfig';
import 'firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';

const FornecedoresAdd = () => {
  const [fornecedor, setFornecedor] = useState({
    nome: '',
    endereco: '',
    tipoProduto: '',
  });
  const fornecedoresRef = collection(db, 'fornecedores');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFornecedor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegistrarProduto = async () => {
    try {
      // Salvar o fornecedor no Firestore
      await addDoc(fornecedoresRef, fornecedor);
    } catch (error) {
      console.error('Erro ao registrar fornecedor:', error);
    }
  };

  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Nome
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Insira o nome do fornecedor"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="nome"
          value={fornecedor.nome}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Endereço
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Insira o Endereço"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="endereco"
          value={fornecedor.endereco}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Tipo de Produto
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Insira o tipo de produto"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="tipoProduto"
          value={fornecedor.tipoProduto}
          onChange={handleInputChange}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={handleRegistrarProduto}
      >
        Registrar Produto
      </button>
    </>
  );
};

export default FornecedoresAdd;
