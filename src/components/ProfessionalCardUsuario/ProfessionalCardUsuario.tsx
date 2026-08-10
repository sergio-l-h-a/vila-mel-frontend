import { useEffect, useState } from "react";
import styled from "styled-components";
import type { Professional } from "../../types/Professional";
import { updateOwnProfile, updatePhoto } from "../../services/api";

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

export default function ProfessionalCardUsuario() {
  const [professional, setProfessional] = useState<Professional | null>(null);

  // Carregar usuário logado
  useEffect(() => {
    const saved = localStorage.getItem("loggedUser");
    if (saved) {
      setProfessional(JSON.parse(saved));
    }
  }, []);

  if (!professional) {
    return <p>Carregando...</p>;
  }

  const backendUrl = "https://vila-mel-backend.onrender.com";

  const imageSrc = professional.image
    ? `${backendUrl}/uploads/${professional.image}`
    : "/imagens/default.png";

  const handleEditProfile = async () => {
    const name = prompt("Novo nome:", professional.name) || professional.name;
    const profession = prompt("Nova profissão:", professional.profession) || professional.profession;
    const phone = prompt("Novo telefone:", professional.phone) || professional.phone;
    const gender = prompt("Novo gênero:", professional.gender) || professional.gender;

    const res = await updateOwnProfile({
      key: professional.key,
      name,
      profession,
      phone,
      gender
    });

    if (res.data.success) {
      alert("Perfil atualizado!");
      localStorage.setItem("loggedUser", JSON.stringify(res.data.professional));
      setProfessional(res.data.professional);
    }
  };

  const handleEditPhoto = async () => {
    if (professional.photoChanges >= 3) {
      alert("Você atingiu o limite de edições.");
      return;
    }

    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("key", professional.key);
      formData.append("image", file);

      const res = await updatePhoto(formData);

      if (res.data.success) {
        alert("Foto atualizada!");
        localStorage.setItem("loggedUser", JSON.stringify(res.data.professional));
        setProfessional(res.data.professional);
      }
    };

    input.click();
  };

  return (
    <Card>
      <Avatar gender={professional.gender}>
        <AvatarImage src={imageSrc} alt={professional.name} />
      </Avatar>

      <Name>{professional.name}</Name>
      <Profession>{professional.profession}</Profession>

      {professional.photoChanges < 3 ? (
        <>
          <Button onClick={handleEditProfile}>Editar Perfil</Button>
          <Button onClick={handleEditPhoto}>
            Trocar Foto ({professional.photoChanges}/3)
          </Button>
        </>
      ) : (
        <p style={{ color: "red", marginTop: 10 }}>
          Limite de edições atingido.
        </p>
      )}
    </Card>
  );
}
