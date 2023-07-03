import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { BsTrash } from 'react-icons/bs';

const Fornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    const fetchFornecedores = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'fornecedores'));
        const data = querySnapshot.docs.map((doc) => {
          const fornecedorData = doc.data();
          return { id: doc.id, ...fornecedorData };
        });
        setFornecedores(data);
      } catch (error) {
        console.error('Erro ao buscar fornecedores:', error);
      }
    };

    fetchFornecedores();
  }, []);

  const handleExcluirFornecedor = async (id) => {
    try {
      // Remover o fornecedor do Firestore
      await deleteDoc(doc(db, 'fornecedores', id));

      // Remover o fornecedor da lista
      setFornecedores((prevFornecedores) =>
        prevFornecedores.filter((fornecedor) => fornecedor.id !== id)
      );
    } catch (error) {
      console.error('Erro ao excluir fornecedor:', error);
    }
  };

  return (
    <div className="list-group">
      {fornecedores.map((fornecedor, index) => (
        <div className="card" key={index}>
          <div className="card-header">
            {fornecedor.nome}
            <button
              className="btn btn-link"
              onClick={() => handleExcluirFornecedor(fornecedor.id)}
            >
              <BsTrash />
            </button>
          </div>
          <div className="card-body">
            <h5 className="card-title">Endereço:</h5>
            <p className="card-text">{fornecedor.endereco}</p>
          </div>
          <div className="card-body">
            <h5 className="card-title">Tipo de produto:</h5>
            <p className="card-text">{fornecedor.tipoProduto}</p>
          </div>
        </div>
      ))}
      <div className="list-group">
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="button">
            <NavLink className="nav-link" activeClassName="active" to="/fornecedores/add">
              Adicionar
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fornecedores;
