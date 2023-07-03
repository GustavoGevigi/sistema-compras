import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, query, where, doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const Fornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [contatos, setContatos] = useState([]);
  const [cotacoes, setCotacoes] = useState([]);
  const [formValues, setFormValues] = useState({
    fornecedor: '',
    nomeProduto: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fornecedoresQuerySnapshot = await getDocs(collection(db, 'fornecedores'));
        const fornecedoresData = fornecedoresQuerySnapshot.docs.map((doc) => {
          const fornecedorData = doc.data();
          return { id: doc.id, ...fornecedorData };
        });
        setFornecedores(fornecedoresData);

        const produtosQuerySnapshot = await getDocs(collection(db, 'produtos'));
        const produtosData = produtosQuerySnapshot.docs.map((doc) => doc.data());
        setProdutos(produtosData);

        const contatosQuerySnapshot = await getDocs(collection(db, 'contatos'));
        const contatosData = contatosQuerySnapshot.docs.map((doc) => doc.data());
        setContatos(contatosData);

        const cotacoesQuerySnapshot = await getDocs(collection(db, 'cotacao'));
        const cotacoesData = cotacoesQuerySnapshot.docs.map((doc) => doc.data());
        setCotacoes(cotacoesData);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleRegistrarCotacao = async () => {
    const { fornecedor, nomeProduto } = formValues;
    if (fornecedor && nomeProduto) {
      try {
        const fornecedorDocRef = doc(db, 'fornecedores', fornecedor);
        await updateDoc(fornecedorDocRef, {
          cotacao: increment(1),
        });

        const cotacaoData = {
          fornecedor,
          produto: nomeProduto,
        };

        await addDoc(collection(db, 'cotacao'), cotacaoData);

        // Atualizar a lista de cotacoes
        const updatedCotacoes = [...cotacoes, cotacaoData];
        setCotacoes(updatedCotacoes);

        // Limpar os campos de cotação
        setFormValues({
          fornecedor: '',
          nomeProduto: '',
        });
      } catch (error) {
        console.error('Erro ao adicionar cotação:', error);
      }
    }
  };

  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Cotação
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Insira a cotação do produto"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="nomeProduto"
          value={formValues.nomeProduto}
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
          name="fornecedor"
          value={formValues.fornecedor}
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
      <button type="button" className="btn btn-primary btn-lg" onClick={handleRegistrarCotacao}>
        Adicionar Cotação
      </button>

      <div className="list-group mt-4">
        {fornecedores.map((fornecedor, index) => {
          const contato = contatos.find((contato) => contato.fornecedor === fornecedor.id);
          const produto = produtos.find((produto) => produto.id === fornecedor.produto);
          const cotacao = cotacoes.find((cotacao) => cotacao.fornecedor === fornecedor.id);

          return (
            <div className="card" key={index}>
              <div className="card-header">{fornecedor.nome}</div>
              <div className="card-body">
                <h5 className="card-title">Endereço:</h5>
                <p className="card-text">{fornecedor.endereco}</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Tipo de produto:</h5>
                <p className="card-text">{fornecedor.tipoProduto}</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Nome do produto:</h5>
                <p className="card-text">{produto?.nomeProduto}</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Telefone:</h5>
                <p className="card-text">{contato?.telefone}</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Email:</h5>
                <p className="card-text">{contato?.email}</p>
              </div>
              {cotacao && (
                <div className="card-body">
                  <h5 className="card-title">Cotação:</h5>
                  <p className="card-text">{cotacao.produto}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fornecedores;
