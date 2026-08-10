import { useEffect, useState } from "react";
import styled from "styled-components";
import { updateOwnProfile, updatePhoto } from "../../services/api";
import { useNavigate } from "react-router-dom";
import type { Professional } from "../../types/Professional";

import ProfessionalCardUsuario from "../../components/ProfessionalCardUsuario/ProfessionalCardUsuario";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #0a3d62;
  margin-bottom: 20px;
`;

const LogoutButton = styled.button`
  padding: 12px;
  background: #d63031;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background: #e17055;
  }
`;

const LoginButton = styled.button`
  padding: 12px;
  background: #0984e3;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #74b9ff;
  }
`;

export default function Usuario() {
  const navigate = useNavigate();

  const [loggedUser, setLoggedUser] = useState<Professional | null>(null);

  // Carregar usuário logado
  useEffect(() => {
    const saved = localStorage.getItem("loggedUser");
    if (saved) {
      setLoggedUser(JSON.parse(saved));
    }
  }, []);

  const isLoggedUser = loggedUser && loggedUser.id;
  
  const handleEditProfile = async (professional: Professional) => {
    const profession = prompt("Nova profissão:", professional.profession) || professional.profession;
    const phone = prompt("Novo telefone:", professional.phone) || professional.phone;
    const gender = prompt("Novo gênero:", professional.gender) || professional.gender;
    const name = prompt("Novo nome:", professional.name) || professional.name;
    
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
      setLoggedUser(res.data.professional);
    }
  };

  const handleEditPhoto = async (professional: Professional) => {
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
        setLoggedUser(res.data.professional);
      }
    };

    input.click();
  };

  return (
    <Container>
      <Title>Área do Usuário</Title>

      {loggedUser && (
        <LogoutButton
          onClick={() => {
            localStorage.removeItem("loggedUser");
            setLoggedUser(null);
            //alert("Você saiu da sua conta.");
            navigate("/");
          }}
        >
          Sair
        </LogoutButton>
      )}

      {!loggedUser && (
        <LoginButton onClick={() => navigate("/login")}>
          Fazer Login
        </LoginButton>
      )}

      {/* Exibir SOMENTE o usuário logado */}
      {isLoggedUser && (
        <div style={{ marginTop: 30 }}>
          <ProfessionalCardUsuario
            professional={loggedUser}
            loggedUser={loggedUser}
            onEditProfile={handleEditProfile}
            onEditPhoto={handleEditPhoto}
          />
        </div>
      )}
    </Container>
  );
}
