import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import type { Professional } from "../../types/Professional";

import ProfessionalCardUsuario from "../../components/ProfessionalCardUsuario/ProfessionalCardUsuario";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #0a3d62;
  margin-bottom: 20px;
`;

const LogoutButton = styled.button`
  padding: 12px;
  background: #d63031;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background: #e17055;
  }
`;

const LoginButton = styled.button`
  padding: 12px;
  background: #0984e3;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #74b9ff;
  }
`;

export default function Usuario() {
  const navigate = useNavigate();

  const [loggedUser, setLoggedUser] = useState<Professional | null>(null);

  // Carregar usuário logado
  useEffect(() => {
    const saved = localStorage.getItem("loggedUser");
    if (saved) {
      setLoggedUser(JSON.parse(saved));
    }
  }, []);



  return (
    <Container>
      <Title>Área do Usuário</Title>

      {loggedUser && (
        <LogoutButton
          onClick={() => {
            localStorage.removeItem("loggedUser");
            setLoggedUser(null);
            //alert("Você saiu da sua conta.");
            navigate("/");
          }}
        >
          Sair
        </LogoutButton>
      )}

      {!loggedUser && (
        <LoginButton onClick={() => navigate("/login")}>
          Fazer Login
        </LoginButton>
      )}

      {/* Exibir SOMENTE o usuário logado */}
      {loggedUser && (
        <div style={{ marginTop: 30 }}>
          <ProfessionalCardUsuario  />
        </div>
      )}
    </Container>
  );
}
