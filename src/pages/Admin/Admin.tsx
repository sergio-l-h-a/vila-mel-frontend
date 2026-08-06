import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #0a3d62;
  margin-bottom: 20px;
`;

export default function Admin() {
  const admin = localStorage.getItem("admin");

  if (!admin) {
    return <p style={{ color: "red" }}>Acesso negado. Faça login como administrador.</p>;
  }

  return (
    <Container>
      <Title>Painel do Administrador</Title>

      <p>Bem-vindo, administrador!</p>

      <p>Aqui você poderá:</p>

      <ul>
        <li>Gerenciar profissionais</li>
        <li>Editar qualquer perfil</li>
        <li>Trocar fotos sem limite</li>
        <li>Excluir profissionais</li>
        <li>Ver estatísticas</li>
      </ul>
    </Container>
  );
}
