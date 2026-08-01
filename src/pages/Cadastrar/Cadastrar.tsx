import { useState } from "react";
import styled from "styled-components";
import { api } from "../../services/api";

const Container = styled.div`
  max-width: 600px;
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

const Select = styled.select`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 14px;
  background: #2ecc71;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #27ae60;
  }
`;

export default function Cadastrar() {
  const [form, setForm] = useState({
    name: "",
    profession: "",
    phone: "",
    image: "",
    gender: "male"
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await api.post("/professionals", form);
      alert("Profissional cadastrado com sucesso!");
      setForm({ name: "", profession: "", phone: "", image: "", gender: "male" });
    } catch (error) {
      alert("Erro ao cadastrar profissional.");
    }
  };

  return (
    <Container>
      <Title>Cadastrar Profissional</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          placeholder="Nome"
          value={form.name}
          onChange={handleChange}
          required
        />

        <Input
          name="profession"
          placeholder="Profissão"
          value={form.profession}
          onChange={handleChange}
          required
        />

        <Input
          name="phone"
          placeholder="Telefone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <Input
          name="image"
          placeholder="Nome da imagem (ex: rogerio.png)"
          value={form.image}
          onChange={handleChange}
        />

        <Select name="gender" value={form.gender} onChange={handleChange}>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
        </Select>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
}
