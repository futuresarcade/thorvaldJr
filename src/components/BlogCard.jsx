import styled from "styled-components";
import { Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const Card = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer; /* Make it clear that the card is clickable */

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit color from parent */
`;

const Title = styled.h2`
  font-size: 1.5rem;
  text-decoration: none; /* Remove underline */
  color: #333;
  margin-bottom: 0.5rem;

  &:hover {
    color: #0073e6; /* Subtle color change on hover */
  }
`;

const Excerpt = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { url, description } = node.data.target.fields.file;
      return <Image src={`https:${url}`} alt={description || "blog image"} />;
    },
  },
};

const BlogCard = ({ id, title, excerpt, body, imageUrl }) => (
  <Card>
    {imageUrl && <Image src={imageUrl} alt={title} />}
    <StyledLink to={`/post/${id}`}>
      <Title>{title}</Title>
    </StyledLink>
    <Excerpt>{excerpt}</Excerpt>
    {body && <div>{documentToReactComponents(body)}</div>}
  </Card>
);

export default BlogCard;
