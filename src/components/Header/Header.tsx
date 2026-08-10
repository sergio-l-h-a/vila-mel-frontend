import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import type { Professional } from "../../types/Professional";
import { useAuth } from "../../context/AuthContext";

const Nav = styled.nav`
  background: #0a3d62;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const UserInfo = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const LogoutButton = styled.button`
  background: #d63031;
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  margin-left: 15px;
  cursor: pointer;

  &:hover {
    background: #e17055;
  }
`;

export default function Header() {
  const [loggedUser, setLoggedUser] = useState<Professional | null>(null);

  const { user, logout } = useAuth();

  useEffect(() => {
    const updateUser = () => {
      const saved = localStorage.getItem("loggedUser");
      setLoggedUser(saved ? JSON.parse(saved) : null);
    };

    updateUser(); // carregar na primeira vez

    window.addEventListener("storage", updateUser);
    return () => window.removeEventListener("storage", updateUser);
  }, []);


  

  return (
    <Nav>
      <Menu>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/cadastrar">Cadastrar</Link>

        {!loggedUser && <Link to="/login">Login</Link>}
        {loggedUser && <Link to="/usuario">Área do Usuário</Link>}
      </Menu>


      <UserInfo>
      {user && <span>Olá, {user.name}!</span>}

      </UserInfo>
      <LogoutButton>
        <button onClick={logout}>Sair</button>
      </LogoutButton>
    </Nav>
  );
}
