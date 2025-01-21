import styled from "styled-components";

const FeaturedContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  text-align: center;
`;

const FeaturedContent = styled.div`
  max-width: 800px;
`;

const FeaturedPost = () => (
  <FeaturedContainer>
    <FeaturedContent>
      <h2>Welcome to Futures Arcade</h2>
      <p>Your destination for modern insights and minimalism.</p>
    </FeaturedContent>
  </FeaturedContainer>
);

export default FeaturedPost;
