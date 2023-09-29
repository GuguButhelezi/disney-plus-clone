import React from "react";
import styled from "styled-components";
import viewersDisney from '../assets/images/viewers-disney.png'
import viewersMarvel from '../assets/images/viewers-marvel.png'
import viewersNational from '../assets/images/viewers-national.png'
import viewersPixar from '../assets/images/viewers-pixar.png'
import viewersStarwars from '../assets/images/viewers-starwars.png'
import marvelVid from '../assets/videos/1564676115-marvel.mp4'
import nationalVid from '../assets/videos/1564676296-national-geographic.mp4'
import pixarVid from '../assets/videos/1564676714-pixar.mp4'
import starwarsVid from '../assets/videos/1608229455-star-wars.mp4'
import disneyVid from '../assets/videos/1564674844-disney.mp4'

function Viewers() {
  return (
    <>
      <Container className="viewers">
        <Wrap>
          <img src={viewersDisney}/>
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={disneyVid} type="video/mp4"/>
          </video>
        </Wrap>
        <Wrap>
          <img src={viewersMarvel}/>
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={marvelVid} type="video/mp4"/>
          </video>
        </Wrap>
        <Wrap>
          <img src={viewersNational}/>
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={nationalVid} type="video/mp4"/>
          </video>
   
        </Wrap>
        <Wrap>
          <img src={viewersPixar}/>
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={pixarVid} type="video/mp4"/>
          </video>
   
        </Wrap>
        <Wrap>
          <img src={viewersStarwars}/>
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={starwarsVid} type="video/mp4"/>
          </video>
   
        </Wrap>
        </Container>
    </>
  );
}

    const Container = styled.div`
    `;

    const Wrap = styled.div`
      padding-top: 52%;
      border-radius: 8px;
      box-shadow: rgb(0 0 0/ 68%) 0px 24px 28px -8px, rgb( 0 0 0 / 72%) 0px 16px 12px -12px;
      cursor: pointer;
      overflow: hidden;
      position: relative;
      transition: all 0.3s cubic-bezier(0.24, 0.44, 0.48, 0.92) 0s;
      border: 4px solid #ffffff0d;

      img {
        inset: 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 0.5s ease-in-out 0s;
        z-index: 1;
        top: 0;
      }

      video{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
      }
      
      &:hover{
        box-shadow: rgb( 0 0 0 / 76%) 0px 36px 60px -12px, rgb( 0 0 0 / 68%) 0px 28px 20px -12px;
        transform: scale(1.05);
        border-color: green;

        video {
          opacity: 1;
        }
      }
    `


export default Viewers;
