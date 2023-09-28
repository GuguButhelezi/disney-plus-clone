import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderscales from "../assets/images/slider-scales.jpg";
import sliderbadag from "../assets/images/slider-badag.jpg";
import sliderbadging from "../assets/images/slider-badging.jpg";
import sliderscale from "../assets/images/slider-scale.jpg";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slideToScroll: 1,
    slideToShow: 1,
    autoplay: true,
  };

  return (
    <>
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img src={sliderscales} />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src={sliderscale} />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src={sliderbadag} />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src={sliderbadging} />
          </a>
        </Wrap>
      </Carousel>
    </>
  );
}

const Carousel = styled(Slider)`
    margin-top: 24px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover{
            opacity: 1;
            transition: opacity 200ms ease-in-out;
        }
        }

        ul li button{
            &:before{
                font-size: 12px;
                color: rgb(160, 168, 172);
            }
        }

        li.slick-active button:before{
            color: white;

        }

        .slick-list{
            overflow: initial;
        }

        .slick-prev{
            left: -76px;
        }

        .slick-next {
            right: -76px;
        }
    }
`;
const Wrap = styled.div`
  border-radius: 8px;
  cursor: pointer;
  position: relative;

  a {
    box-shadow: rgb(0 0 0 / 68%) 0px 24px 28px -12px,
      rgb(0 0 0 / 72%) 0px 16px 12px -12px;
    position: relative;
    padding: 4px;
    display: block;
  }

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    padding: 0;
    border: 3px solid white;
    transition-duration: 350ms;
  }
`;

export default ImageSlider;
