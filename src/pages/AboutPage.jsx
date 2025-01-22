import styled from "styled-components";

const AboutContainer = styled.main`
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;

  span {
    font-size: 1.2rem;
    color: #555;
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Hr = styled.hr`
  margin: 2rem 0;
  border: 1px solid #ddd;
`;

const ContactInfo = styled.div`
  font-size: 1.2rem;
  margin-top: 2rem;
  text-align: center;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Title>
        Thorvald Sanchez <br />
        <span>(Havana - Cuba), 1933 - 2017</span>
      </Title>
      <Section>
        <Text>
          Thorvald Sanchez was a self-taught artist who played a significant
          role in the cultural and artistic movements of the 1960s and 1970s in
          New York, later making a lasting impact in South Florida from the
          1970s onward. His work, rooted in the formal principles of modernism,
          reflects a deeply personal exploration of line and space. With each
          piece, he created an ever-evolving interplay of theme and variation.
          Sanchez’s paintings are dynamic, continually shifting and reforming
          before the viewer’s eyes. Bold black lines and the spaces they define
          seem to coexist and compete, creating a visual tension that invites
          prolonged observation. What appears to thrust forward on first glance
          may recede upon closer inspection, transforming seemingly simple
          compositions into complex studies of linear and spatial
          relationships.His art embodies a unique blend of conviction and
          intellect.
        </Text>
        <Text>
          In addition to his accomplishments as an artist, Sanchez was an avid
          collector of Cuban art, amassing works by renowned avant-garde figures
          of the 1950s, including Mariano Rodríguez and René Portocarrero. He
          was also an admirer of Fernand Léger and an expert in Art Deco and
          mid-century design, integrating these influences into his artistic
          perspective and collection. Thorvald Sanchez’s legacy is one of
          innovation, curiosity, and a profound dedication to the dialogue
          between art and design.
        </Text>
        <Text>
          Sanchez began his journey in Rome in the early 1960s, where he spent
          several years honing his craft. He then moved to New York City,
          opening a studio that would serve as a hub for his artistic
          exploration. In 1970, he relocated to Palm Beach, Florida, where his
          work gained significant recognition.
        </Text>
      </Section>
      <Hr />
      <Section>
        <SubTitle>Exhibitions and Collections</SubTitle>
        <Text>
          Thorvald Sanchez’s work has been showcased in numerous exhibitions and
          prestigious collections, including:
        </Text>
        <ul>
          <li>The OEA Permanent Collection of Art, Washington, D.C.</li>
          <li>The Mint Museum of Art, Charlotte, North Carolina</li>
          <li>The Society of the Four Arts, Palm Beach, Florida</li>
          <li>West Palm Beach International Airport, Palm Beach, Florida</li>
          <li>UM Lowe Art Museum, Miami, Florida</li>
          <li>Bacardi Art Gallery, Miami, Florida</li>
        </ul>
      </Section>
      <Hr />
      <Section>
        <SubTitle>Artwork Details</SubTitle>
        <Text>
          All of Thorvald Sanchez’s paintings are created using acrylic oil on
          canvas. Specific details about each piece, including size, framing and
          availability, can be provided upon request.
        </Text>
      </Section>
      <Hr />
      <Section>
        <SubTitle>Legacy</SubTitle>
        <Text>
          Thorvald Sanchez’s contribution to art and his involvement in the
          vibrant cultural scene of Miami in the 1980s and 1990s solidified his
          legacy as a pioneering artist. His works remain an essential part of
          Latin American art history and continue to inspire future generations.
        </Text>
      </Section>
      <Hr />
      <ContactInfo>
        <SubTitle>Contact</SubTitle>
        <Text>
          For inquiries or further information, please email:{" "}
          <a href="mailto:thorvaldsanchez@gmail.com">
            thorvaldsanchez@gmail.com
          </a>
        </Text>
      </ContactInfo>
    </AboutContainer>
  );
};

export default AboutPage;
