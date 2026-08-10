import { useEffect, useState } from "react";

const ProfessionalCardUsuario = () => {
  const [loggedUser, setLoggedUser] = useState<any>(null);

  // Carregar usuário logado
  useEffect(() => {
    const saved = localStorage.getItem("loggedUser");
    if (saved) {
      setLoggedUser(JSON.parse(saved));
    }
  }, []);

  if (!loggedUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="usuario-card">
      <img
        src={loggedUser.image}
        alt={loggedUser.name}
        className="usuario-card-image"
      />

      <h3>{loggedUser.name}</h3>
      <p>{loggedUser.profession}</p>
      <p>{loggedUser.phone}</p>
      <p>{loggedUser.gender}</p>

      <div className="usuario-actions">
        <button
          className="editar-dados-btn"
          onClick={() => console.log("Abrir edição de dados")}
        >
          Editar Dados
        </button>

        <button
          className="editar-foto-btn"
          onClick={() => console.log("Abrir edição de foto")}
        >
          Trocar Foto
        </button>
      </div>
    </div>
  );
};

export default ProfessionalCardUsuario;
