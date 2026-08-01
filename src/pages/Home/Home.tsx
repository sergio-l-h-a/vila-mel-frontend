import { useEffect, useState } from "react";
import { api } from "../../services/api";
import type { Professional } from "../../types/Professional";
import ProfessionalCard from "../../components/ProfessionalCard/ProfessionalCard";
import Comercios from "../../components/Comercios";
import styled from "styled-components";

const Container = styled.div`
  padding: 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
`;

export default function Home() {
  const [professionals, setProfessionals] = useState<Professional[]>([]);

  useEffect(() => {
    api.get("/professionals").then(response => {
      setProfessionals(response.data);
    });
  }, []);

  return (
    <Container>
      <Grid>
        {professionals.map(pro => (
          <ProfessionalCard key={pro.id} professional={pro} />
        ))}
      </Grid>
      <Comercios />
    </Container>
  );
}
