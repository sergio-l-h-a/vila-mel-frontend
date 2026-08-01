
import styled from "styled-components";

const Section = styled.section`
  margin-top: 60px;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  color: #0a3d62;
  margin-bottom: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
`;

const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 15px;
`;

const Name = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

const Category = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
`;

const WhatsButton = styled.a`
  display: inline-flex;
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

  img {
    width: 20px;
    height: 20px;
  }
`;


export default function Comercios() {
  const comercios = [
    { name: "Fort Pan", category: "Padaria", image: "/comercios/padaria.png", phone: "5588982166123" },
    { name: "Aucilania", category: "Salão de Beleza", image: "/comercios/salao.png", phone: "5585997437527" },
    { name: "Vitoria Moda", category: "Loja de Roupas", image: "/comercios/loja-vitoria.png", phone: "5588981000000" },
    { name: "Closet Mel", category: "Loja de Roupas", image: "/comercios/closet-mel.png", phone: "5588981000000" },
    { name: "Rei do Preço", category: "Mercadinho", image: "/comercios/mercadinho.png", phone: "5588981000000" },
    { name: "Posto Vila Mel", category: "Posto de Gasolina", image: "/comercios/posto.png", phone: "5588981000000" },
    { name: "Farmacia", category: "Farmacia", image: "/comercios/farmacia.png", phone: "5588981000000"},
    { name: "LIDERA AGRO", category: "Produtos Agriculas", image: "/comercios/agro.png", phone: "5588981000000" },
    { name: "CS NENEN BARROS", category: "Posto de saúde", image: "/comercios/saude.png", phone: "5588981000000" },
  ];

  return (
    <Section>
      <Title>Comércios da Vila Mel</Title>

      <Grid>
        {comercios.map((item, index) => (
          <Card key={index}>
            <Image src={item.image} alt={item.name} />
            <Name>{item.name}</Name>
            <Category>{item.category}</Category>

            <WhatsButton href={`https://wa.me/${item.phone}`} target="_blank">
            <img src="/comercios/whatsapp.svg" alt="WhatsApp" />
            Chamar no WhatsApp
            </WhatsButton>

          </Card>
        ))}
      </Grid>
    
    </Section>
  );
}
