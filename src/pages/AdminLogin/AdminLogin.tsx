import { useState } from "react";
import styled from "styled-components";
import { loginAdmin } from "../../services/api";
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
  background: #d63031;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #e17055;
  }
`;

export default function AdminLogin() {
  const navigate = useNavigate();
  const [key, setKey] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await loginAdmin(key);

      if (res.data.authorized) {
        alert("Administrador autenticado!");

        localStorage.setItem("admin", JSON.stringify({
          role: "admin",
          key
        }));

        navigate("/admin");
      } else {
        alert("Chave de administrador inválida.");
      }
    } catch (error) {
      alert("Erro ao fazer login de administrador.");
    }
  };

  return (
    <Container>
      <Title>Login do Administrador</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Digite sua chave ADMIN"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          required
        />

        <Button type="submit">Entrar como Admin</Button>
      </Form>
    </Container>
  );
}
