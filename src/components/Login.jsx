import React from "react";
import styled from "styled-components";
import picture1 from "../assets/images/login-background.jpg"
import picture2 from "../assets/images/cta-logo-one.svg"
import picture3 from "../assets/images/cta-logo-two.png"

function Login() {

  
  return (
    <>
    <Container>
        <Content>
          <BackgroundImage />
          <CTA>
            <CTALogo1 src={picture2}/>
            <Signup>GET ALL THERE</Signup>
            <Description>Get premier access to the best movies and tv shows there is to offer with a Disney+ subscription.</Description>
            <CTALogo2 src={picture3} />
          </CTA>
        </Content>
      </Container>
    </>
    );
  }

  const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
  `;

  const Content = styled.div`
    margin-bottom: 12vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 76px 36px;
    height: 100%;
  `;

  const BackgroundImage = styled.div`
    background-image: url(${picture1});
    z-index: -1;
    position: absolute;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
  `;

  const CTA = styled.div`
    margin-bottom: 28px;
    max-width: 660px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 200ms;
    width: 100%;
  `;

  const CTALogo1 = styled.img`
    margin-bottom: 16px;
    max-width: 620px;
    min-height: 1px;
    display: block;
    width: 100%;
  `;

  const Signup = styled.a`
    font-weight: bold;
    background-color: #0063e5;
    margin-bottom: 16px;
    letter-spacing: 1.6px;
    width: 100%;
    font-size: 20px;
    padding: 16px 0;
    border: 2px solid transparent;
    border-radius: 8px;

    a:hover{
      background-color: #0483ef;
    }
    
  `
  

  const Description = styled.p`
    color: hsla(0, 0%, 96%, 1);
    font-size: 16px;
    margin: 0 0 28px;
    line-height: 1.5;
    letter-spacing: 1.6px;
  `

  const CTALogo2 = styled.img`
    width: 100%;
    max-width: 620px;
    margin-bottom: 24px;
    display: inline-block;
    vertical-align: bottom;
  `


export default Login;
