import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiPlusCircle } from "react-icons/fi";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 18px 40px;
  background: linear-gradient(135deg, #0a3d62, #074b7a);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 18px 20px;
  }
`;

const Logo = styled.h2`
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 768px) {
    gap: 18px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavLink = styled(Link)`
  color: #ecf0f1;
  font-size: 17px;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    color: #2ecc71;
  }
`;

const ActionButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #2ecc71;
  padding: 10px 18px;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #27ae60;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>Profissionais VILA MEL</Logo>

      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/contato">Contato</NavLink>

        <ActionButton to="/cadastrar">
          <FiPlusCircle size={18} />
          Cadastrar
        </ActionButton>
      </Nav>
    </HeaderContainer>
  );
}
