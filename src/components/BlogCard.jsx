import styled from "styled-components";
import { Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
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
    <Link to={`/post/${id}`}>
      <Title>{title}</Title>
    </Link>
    <Excerpt>{excerpt}</Excerpt>
    {body && <div>{documentToReactComponents(body)}</div>}
  </Card>
);

export default BlogCard;
