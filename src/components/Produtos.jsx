import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const Produtos = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [produtoForm, setProdutoForm] = useState({
    nomeProduto: '',
    fornecedorId: '',
  });
  const [produtos, setProdutos] = useState([]);

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

    const fetchProdutos = async () => {
      try {
        const produtosQuerySnapshot = await getDocs(collection(db, 'produtos'));
        const produtosData = produtosQuerySnapshot.docs.map((doc) => doc.data());
        setProdutos(produtosData);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchFornecedores();
    fetchProdutos();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProdutoForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleRegistrarProduto = async () => {
    try {
      // Salvar o produto no Firestore
      await addDoc(collection(db, 'produtos'), produtoForm);

      // Limpar o formulário
      setProdutoForm({
        nomeProduto: '',
        fornecedorId: '',
      });

      // Recarregar a página
      handleReloadPage();
    } catch (error) {
      console.error('Erro ao registrar produto:', error);
    }
  };

  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Nome do Produto
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Insira o nome do produto"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="nomeProduto"
          value={produtoForm.nomeProduto}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Fornecedores
        </span>
        <select
          className="form-select"
          aria-label="Default select example"
          name="fornecedorId"
          value={produtoForm.fornecedorId}
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
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={handleRegistrarProduto}
      >
        Registrar Produto
      </button>

      <div className="list-group">
        {fornecedores.map((fornecedor, index) => {
          const produtosDoFornecedor = produtos.filter(
            (produto) => produto.fornecedorId === fornecedor.id
          );

          return (
            <div className="card mt-3" key={index}>
              <div className="card-header">{fornecedor.nome}</div>
              <div className="card-body">
                <h5 className="card-title">Produtos:</h5>
                <ul>
                  {produtosDoFornecedor.map((produto, index) => (
                    <li key={index}>{produto.nomeProduto}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Produtos;
