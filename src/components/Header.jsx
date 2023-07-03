import React, { useContext } from 'react';
import { auth, db } from '../firebaseConfig';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/fornecedores">
                  Fornecedores
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/produtos">
                  Produtos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/contatos">
                  Contatos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/cotacoes">
                  Cotações
                </NavLink>
              </li>

            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-danger">
                <NavLink className="nav-link" activeClassName="active" to="/login">
                  Logout
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
