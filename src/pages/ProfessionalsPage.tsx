import { useEffect, useState } from "react";
import ProfessionalCard from "../components/ProfessionalCard/ProfessionalCard";
import type { Professional } from "../types/Professional";

export default function ProfessionalsPage() {
  const [professionals, setProfessionals] = useState<Professional[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/professionals")
      .then((res) => res.json())
      .then((data) => setProfessionals(data));
  }, []);

  return (
    <div style={{ 
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "20px"
    }}>
      {professionals.map((professional) => (
        <ProfessionalCard key={professional.id} professional={professional} />
      ))}
    </div>
  );
}
