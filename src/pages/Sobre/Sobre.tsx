import styled from "styled-components";

const Container = styled.div`
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: #0a3d62;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export default function Sobre() {
  return (
    <Container>
      <Title>Sobre Nós</Title>
      <Text>
        O Profissionais VILA MEL é uma plataforma criada para conectar moradores local e de <strong> Jucás </strong>
        aos melhores profissionais da região. Aqui você encontra eletricistas,
        mecânicos, manicures, pedreiros, encanadores, barbeiros e muito mais.
      </Text>

      <Text>
        Nosso objetivo é facilitar a vida de quem precisa de serviços confiáveis,
        rápidos e de qualidade. Todos os profissionais cadastrados são reais e
        atuam em suas áreas com responsabilidade e dedicação.
      </Text>

      <Text>
        Estamos sempre atualizando nossa base de dados para garantir que você tenha
        acesso aos melhores profissionais da região local.
      </Text>
    </Container>
  );
}
