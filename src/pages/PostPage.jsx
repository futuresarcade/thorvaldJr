import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import client from "../contentfulClient";

const Container = styled.main`
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.3rem;
  text-align: center;
  @media (max-width: 768px) {
    margin-bottom: 0.2rem; /* Even smaller gap for mobile */
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 140px); /* Adjust dynamically based on screen height */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0;

  @media (max-width: 768px) {
    height: calc(100vh - 100px); /* Slightly adjust for smaller screens */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensures the full image is visible without cropping */

  @media (max-width: 768px) {
    height: auto; /* Let the image shrink naturally on small screens */
    max-height: 80vh; /* Prevents it from being too large */
  }
`;

const Content = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  padding: 1rem;
  text-align: justify;
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
      <Title>{post.title}</Title>
    </Container>
  );
};

export default PostPage;
