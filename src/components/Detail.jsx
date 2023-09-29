import React from "react";
import styled from "styled-components";
import iconwhite from "../assets/images/play-icon-white.png";
import iconblack from "../assets/images/play-icon-black.png";
import groupicon from "../assets/images/group-icon.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Detail() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
          console.log(detailData);
        } else {
          console.log(
            "the data you are attempting to access does not exist in this database"
          );
        }
      })
      .catch((error) => {
        console.log("error retrieving document:", error);
      });
  }, [id]);

  return (
    <>
      <Container className="detail">
        <Background>
          <img src={detailData.backgroundImg} alt={detailData.title} />
        </Background>
        <ImageTitle>
          <img src={detailData.titleImg} alt={detailData.title} />
        </ImageTitle>
        <ContentMeta>
          <Controls>
            <Player>
              <img src={iconblack} />
              <span>Play</span>
            </Player>
            <Trailer>
              <img src={iconwhite} />
              <span>Trailer</span>
            </Trailer>
            <Addlist>
              <span />
              <span />
            </Addlist>
            <Groupwatch>
              <div>
                <img src={groupicon} alt="" />
              </div>
            </Groupwatch>
          </Controls>
          <SubTitle>{detailData.subTitle}</SubTitle>
          <Description>{detailData.description}</Description>
        </ContentMeta>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.75;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 auto;
  height: 30vw;
  min-height: 172px;
  padding-bottom: 28px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 32vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 872px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 28px 0;
  min-height: 60px;
`;
const Player = styled.button`
  font-size: 16px;
  margin: 0 20px 0 0;
  padding: 0 24px;
  height: 52px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: not-allowed;
  justify-content: center;
  letter-spacing: 1.6px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(248, 248, 248);
  border: none;

  img {
    width: 36px;
  }

  &:hover {
    background: rgba(180, 180, 180);
  }

  @media (max-width: 768px) {
    height: 44px;
    padding: 0 20px;
    font-size: 16px;
    margin: 0 12px 0 0;
  }

  img {
    width: 28px;
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid white;
  color: white;
`;

const Addlist = styled.div`
        margin-right: 16px;
        height: 48px;
        width: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0 , 0, 0.5);
        border-radius: 50%;
        border 1px solid white;
        cursor: pointer;

        span{
            background-color: rgb(248, 248, 248);
            display: inline-block;

            &:first-child{
                height: 2px;
                transform: translate(1px, 0px) rotate(0deg);
                width: 20px;
            }

            &:nth-child(2){
                height: 20px;
                transform: translateX(-9px) rotate(0deg);
                width: 2px;
            }
        }
    `;

const Groupwatch = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  display: flex;
  justifty-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 44px;
    width: 44px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: white;
  font-size: 16px;
  min-height: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Description = styled.div`
  line-height: 1.3;
  font-size: 20px;
  padding: 12px 0;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default Detail;
