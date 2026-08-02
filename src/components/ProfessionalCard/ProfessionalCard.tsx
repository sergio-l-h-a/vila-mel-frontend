import styled from "styled-components";
import type { Professional } from "../../types/Professional";

const Card = styled.div`
  padding: 20px;
  margin-top: 20px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  text-align: center;
`;

const Name = styled.h2`
  font-size: 22px;
  font-weight: bold;
`;

const Profession = styled.p`
  color: #666;
  margin-top: 8px;
`;

const WhatsAppButton = styled.a`
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


const LocalButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #3498db;
  padding: 10px 18px;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #2980b9;
    transform: translateY(-2px);
  }

  img {
    width: 20px;
    height: 20px;
  }
`;



const Avatar = styled.div<{ gender: "male" | "female" }>`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: ${({ gender }) =>
    gender === "male" ? "#4092f0" : "#ec779e"};
  margin: 0 auto 12px auto;  
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;


const professionImages: Record<string, string> = {
  Pedreiro: "/imagens/pedreiro.png",
  Manicure: "/imagens/manicure.png",
  Eletricista: "/imagens/eletricista.png",
  Salão: "/imagens/salao-beleza.png",
  Mecânico: "/imagens/mecanico.png",
  Barbeiro: "/imagens/barbeiro.png",
  Soldador: "/imagens/soldador.png",
  Confeiteira: "/imagens/confeiteira.png",
  Artesão: "/imagens/artesao-couro.png"
};




interface Props {
  professional: Professional;
}

export default function ProfessionalCard({ professional }: Props) {
  return (
    <Card>
      <Avatar gender={professional.gender}>
            <AvatarImage
                src={
                professional.image
                    ? professional.image
                    : professionImages[professional.profession] || "/imagens/default.png"
                }
                alt={professional.name}
            />
     </Avatar>




      <Name>{professional.name}</Name>
      <Profession>{professional.profession}</Profession>

      <WhatsAppButton
        href={`https://wa.me/55${professional.phone}`}
        target="_blank"
      >
        <img src="/comercios/whatsapp.svg" alt="WhatsApp" />
        Chamar no WhatsApp
      </WhatsAppButton>


      <LocalButton href={professional.localizacao} target="_blank">
        <img src="/imagens/whatsapp.svg" alt="Localização" />
        Ver localização
      </LocalButton>

    </Card>
  );
}
