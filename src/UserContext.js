import React, { createContext, useState } from 'react';

// Crie o contexto do usuário
export const UserContext = createContext();

// Crie o provedor do contexto do usuário
export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(''); // Estado para armazenar o papel do usuário

  // Função para atualizar o papel do usuário
  const updateUserRole = (role) => {
    setUserRole(role);
  };

  // Valor do contexto que será fornecido aos componentes descendentes
  const contextValue = {
    userRole,
    updateUserRole,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
