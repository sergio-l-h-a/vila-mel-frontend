import styled from "styled-components";
import { FiFacebook, FiInstagram, FiGithub, FiArrowUpCircle } from "react-icons/fi";

const FooterContainer = styled.footer`
  background: #0a3d62;
  color: #fff;
  padding: 40px 20px;
  margin-top: 60px;
  text-align: center;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-bottom: 25px;

  a {
    color: #fff;
    font-size: 28px;
    transition: 0.3s;

    &:hover {
      color: #2ecc71;
    }
  }
`;

const BackToTop = styled.button`
  background: none;
  border: none;
  color: #2ecc71;
  font-size: 32px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Copy = styled.p`
  margin-top: 20px;
  font-size: 14px;
  opacity: 0.8;
`;

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterContainer>
      <SocialContainer>
        <a href="https://facebook.com" target="_blank">
          <FiFacebook />
        </a>
        <a href="https://instagram.com" target="_blank">
          <FiInstagram />
        </a>

        <a href="https://github.com" target="_blank">
            <FiGithub />
        </a>
      </SocialContainer>

      <BackToTop onClick={scrollTop}>
        <FiArrowUpCircle />
      </BackToTop>

      <Copy>© 2026 Profissionais Vila Mel — Todos os direitos reservados.</Copy>
    </FooterContainer>
  );
}
