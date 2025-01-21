import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import BlogCard from "./BlogCard";
import client from "../contentfulClient";

const GridContainer = styled.section`
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Placeholder = styled.div`
  height: 0;
  visibility: hidden;
`;

const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

const BlogGrid = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const POSTS_PER_PAGE = 6;

  const fetchPosts = async (page) => {
    try {
      const response = await client.getEntries({
        content_type: "blogPost",
        skip: (page - 1) * POSTS_PER_PAGE,
        limit: POSTS_PER_PAGE,
      });

      // Update the posts array without duplicating entries
      const newPosts = response.items.map((item) => ({
        id: item.sys.id,
        title: item.fields.title,
        excerpt: item.fields.excerpt,
        imageUrl: item.fields.painting?.fields.file.url,
      }));

      setPosts(newPosts); // Append only new posts
      setHasMore(response.total > page * POSTS_PER_PAGE); // Check if more posts are available
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]); // Trigger fetchPosts only when the page changes

  const goToNextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const goToPrevPage = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  const placeholdersCount = POSTS_PER_PAGE - posts.length;

  return (
    <>
      <GridContainer>
        {posts.map((post) => (
          <BlogCard
            key={post.id} // Ensure unique keys for React
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            imageUrl={post.imageUrl}
          />
        ))}
        {/* Add placeholders to maintain grid structure */}
        {Array.from({ length: placeholdersCount }).map((_, index) => (
          <Placeholder key={`placeholder-${index}`} />
        ))}
      </GridContainer>
      <PaginationControls>
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          Previous{/* Add placeholders to maintain grid structure */}
          {Array.from({ length: placeholdersCount }).map((_, index) => (
            <Placeholder key={`placeholder-${index}`} />
          ))}
        </button>
        <button onClick={goToNextPage} disabled={!hasMore}>
          Next
        </button>
      </PaginationControls>
    </>
  );
};

export default BlogGrid;
