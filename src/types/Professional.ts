export interface Professional {
  [x: string]: any;
  localizacao: string | undefined;
  id: number;
  name: string;
  profession: string;
  phone: string;
  "gender": "male" | "female";
  image?: string;
  key: string;
  role: "user" | "admin";
}


