import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";
import Cadastrar from "./pages/Cadastrar/Cadastrar";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { GlobalStyle } from "./styles/global";
import Usuario from "./pages/Usuario/Usuario";
import { useAuth } from "./context/AuthContext";


export default function App() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />

        <Route path="/cadastrar" 
        element={user?.role === "admin" ? <Cadastrar /> : <Navigate to="/" />} 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
