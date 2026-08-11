import { Link } from "react-router-dom";
import styled from "styled-components";
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
  const { user, logout } = useAuth();

  return (
    <Nav>
      <Menu>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>

        {user?.role === "admin" && <Link to="/cadastrar">Cadastrar</Link>}
        {!user && <Link to="/login">Login</Link>}
        {user && <Link to="/usuario">Área do Usuário</Link>}
      </Menu>

      <UserInfo>
        {user && <span>Olá, {user.name}!</span>}
      </UserInfo>

      {user && (
        <LogoutButton onClick={logout}>
          Sair
        </LogoutButton>
      )}
    </Nav>
  );
}
