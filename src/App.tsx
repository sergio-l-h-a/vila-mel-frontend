import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";
import Cadastrar from "./pages/Cadastrar/Cadastrar";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import ProfessionalsPage from "./pages/Professional/ProfessionalsPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

        <ProfessionalsPage />
      <Footer />
    </BrowserRouter>
  );
}
