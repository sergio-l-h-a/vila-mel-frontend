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

const Button = styled.button`
  padding: 10px 16px;
  background: #0984e3;
  color: #fff;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background: #74b9ff;
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

interface Props {
  professional: Professional;
  loggedUser: Professional | null;
  onEditProfile: (professional: Professional) => void;
  onEditPhoto: (professional: Professional) => void;
}

export default function ProfessionalCardUsuario({
  professional,
  loggedUser,
  onEditProfile,
  onEditPhoto
}: Props) {

  const backendUrl = "https://vila-mel-backend.onrender.com";

  const imageSrc =
    professional.image
      ? `${backendUrl}/uploads/${professional.image}`
      : "/imagens/default.png";

  const isOwner = loggedUser && loggedUser.id === professional.id;
  const canEdit = isOwner && professional.photoChanges < 3;

  return (
    <Card>
      <Avatar gender={professional.gender}>
        <AvatarImage src={imageSrc} alt={professional.name} />
      </Avatar>

      <Name>{professional.name}</Name>
      <Profession>{professional.profession}</Profession>

      {canEdit && (
        <>
          <Button onClick={() => onEditProfile(professional)}>
            Editar Perfil
          </Button>

          <Button onClick={() => onEditPhoto(professional)}>
            Trocar Foto ({professional.photoChanges}/3)
          </Button>
        </>
      )}

      {isOwner && professional.photoChanges >= 3 && (
        <p style={{ color: "red", marginTop: 10 }}>
          Limite de edições atingido.
        </p>
      )}
    </Card>
  );
}
