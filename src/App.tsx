import { BrowserRouter} from "react-router-dom";

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
