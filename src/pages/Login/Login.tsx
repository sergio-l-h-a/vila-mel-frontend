import { useState } from "react";
import styled from "styled-components";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #0a3d62;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 14px;
  background: #0984e3;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #74b9ff;
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const [key, setKey] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await api.post("/professionals/login", { key });

      if (res.data.authorized) {
        alert("Login realizado com sucesso!");

        // salvar usuário no localStorage
        localStorage.setItem("loggedUser", JSON.stringify(res.data.professional));

        // redirecionar para área do usuário
        navigate("/usuario");
      } else {
        alert("Chave inválida.");
      }
    } catch (error) {
      alert("Erro ao fazer login.");
    }
  };

  return (
    <Container>
      <Title>Login do Usuário</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Digite sua chave de acesso"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          required
        />

        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
}
