import { useAuth } from "../../context/AuthContext";
import styled from "styled-components";


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

const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-bottom: 15px;
  width: 100%;
`;

const Button = styled.button`
  padding: 14px;
  background: #0984e3;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background: #74b9ff;
  }
`;

type EditFormData = {
  name: string;
  profession: string;
  phone: string;
};




export default function Editar() {
  const { user } = useAuth();

  const handleSave = async () => {
    const updated: EditFormData = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      profession: (document.getElementById("profession") as HTMLInputElement).value,
      phone: (document.getElementById("phone") as HTMLInputElement).value
    };

    if(!user) return null;
    // Aqui criamos o corpo da requisição sem usar EditFormData
    const body = {
      key: user.key,   // ESSENCIAL
      ...updated       // Campos editáveis
    };

    await fetch("https://vila-mel-backend.onrender.com/professionals/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    alert("Dados atualizados!");
  };


  return (
    <Container>
      <Title>Editar Perfil</Title>

      <Input id="name" defaultValue={user?.name} />
      <Input id="profession" defaultValue={user?.profession} />
      <Input id="phone" defaultValue={user?.phone} />

      <Button onClick={handleSave}>Salvar</Button>
    </Container>
  );
}
