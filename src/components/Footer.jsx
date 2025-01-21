import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <p>© 2025 Futures Arcade. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
