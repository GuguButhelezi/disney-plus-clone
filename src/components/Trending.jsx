import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";

function Trending() {
  const movies = useSelector(selectTrending);

  return (
    <>
      <Container>
        <h4>Trending</h4>
        <Content>
          {movies &&
            movies.map((movie, key) => (
              <Wrap key={key}>
                {movie.id}
                <Link to={"/detail/" + movie.id}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </Wrap>
            )).slice(0, 4)}
        </Content>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 0 0 24px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 24px;
  gap: 24px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 52%;
  border-radius: 12px;
  box-shadow: rgb(0 0 0/ 68%) 0px 24px 28px -8px,
    rgb(0 0 0 / 72%) 0px 16px 12px -12px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.3s cubic-bezier(0.24, 0.48, 0.44, 0.92) 0s;
  border: 4px solid rgba(249, 249, 249, 0.2);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    width: 100%;
    opacity: 1;
    position: absolute;
    transition: opacity 0.5s ease-in-out;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 76%) 0px 36px 60px -12px,
      rgb(0 0 0 / 68%) 0px 28px 20px -12px;
    transform: scale(1.05);
    border-color: green;
  }
`;

export default Trending;
