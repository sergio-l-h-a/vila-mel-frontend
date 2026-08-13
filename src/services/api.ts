import axios from "axios";

export const api = axios.create({
  baseURL: "https://vila-mel-backend.onrender.com",
});

export const getProfessionalsAdmin = async () => {
  return api.get("/admin/professional", {
    headers: { Authorization: "superadmin123" }
  });
};

export const professional = async (key: string) => {
  return api.post("/professionals", { key });
};

export const loginProfessional = async (key: string) => {
  return api.post("/professionals/login", { key });
};

export const registerProfessional = async (formData: FormData) => {
  return api.post("/professionals", formData);
};


export const loginAdmin = async (key: string) => {
  return api.post("/admin/login", { key });
};


export const updateOwnProfile = async (data: any) => {
  return api.put("/professionals/update", data);
};

export const updatePhoto = async (formData: FormData) => {
  return api.put("/professionals/update-photo", formData);
};


