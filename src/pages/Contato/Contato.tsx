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

const Info = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export default function Contato() {
  return (
    <Container>
      <Title>Contato</Title>

      <Info>
        📞 Telefone: <strong>(88) 9 9999-0000</strong>
      </Info>

      <Info>
        📧 Email: <strong>contato@profissionaisce.com</strong>
      </Info>

      <Info>
        📍 Localização: Jucás, Ceará
      </Info>

      <Info>
        Caso queira cadastrar seu serviço ou atualizar informações, entre em contato
        pelo WhatsApp ou email acima.
      </Info>
    </Container>
  );
}
