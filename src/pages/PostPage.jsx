import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import client from "../contentfulClient";

const Container = styled.main`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 600px; /* Adjust the height as needed */
  overflow: hidden; /* Ensures content outside the container is hidden */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const Image = styled.img`
  width: auto; /* Allows the image to adjust based on height */
  height: 100%; /* Ensures the image takes up the full height */
`;

const Content = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await client.getEntry(id);
        setPost(response.fields);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <Container>
      {post.painting && (
        <ImageWrapper>
          <Image src={post.painting.fields.file.url} alt={post.title} />
        </ImageWrapper>
      )}

      <Content>{post.body}</Content>
    </Container>
  );
};

export default PostPage;
