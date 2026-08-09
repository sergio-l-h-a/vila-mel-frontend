import { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../../services/api";
import type { Professional } from "../../types/Professional";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #0a3d62;
  margin-bottom: 20px;
`;

const Card = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

const Button = styled.button`
  padding: 10px;
  margin-right: 10px;
  background: #0984e3;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #74b9ff;
  }
`;

const DeleteButton = styled.button`
  padding: 10px;
  background: #d63031;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #e17055;
  }
`;

export default function Admin() {
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [admin, setAdmin] = useState<string | null>(null);

  // Atualiza admin quando a página carrega
  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");
    setAdmin(storedAdmin);
  }, []);

  // Carrega profissionais quando admin existir
  useEffect(() => {
    if (!admin) return;

    api.get("/admin/professionals", {
      headers: { Authorization: "superadmin123" }
    })
      .then(res => setProfessionals(res.data))
      .catch(() => {
        console.error("Erro ao carregar profissionais.");
      });
  }, [admin]);

  if (!admin) {
    return (
      <p style={{ color: "red", textAlign: "center", marginTop: "40px" }}>
        Acesso negado. Faça login como administrador.
      </p>
    );
  }

  return (
    <Container>
      <Title>Painel do Administrador</Title>

      <h2>Profissionais cadastrados</h2>

      {/* {professionals.length === 0 && (
        <p>Nenhum profissional encontrado.</p>
      )} */}

      {professionals.map(p => (
        <Card key={p.id}>
          <h3>{p.name}</h3>
          <p>Profissão: {p.profession}</p>
          <p>Telefone: {p.phone}</p>

          <Button onClick={() => alert("Editar ainda não implementado")}>
            Editar
          </Button>

          <DeleteButton onClick={() => alert("Excluir ainda não implementado")}>
            Excluir
          </DeleteButton>
        </Card>
      ))}
    </Container>
  );
}
