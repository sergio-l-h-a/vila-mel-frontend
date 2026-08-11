export interface Professional {
  id: number;
  name: string;
  profession: string;
  phone: string;
  image?: string;
  gender: "male" | "female";
  key: string;
  role: "user" | "admin";
  localizacao?: string;
  photoChanges: number;
}



