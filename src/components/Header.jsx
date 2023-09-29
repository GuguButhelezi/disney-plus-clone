import React, { useEffect } from "react";
import styled from "styled-components";
import DisneyLogo from "../assets/images/logo.svg";
import homeIcon from "../assets/images/home-icon.svg";
import watchList from "../assets/images/watchlist-icon.svg";
import searchIcon from "../assets/images/search-icon.svg";
import originalIcon from "../assets/images/original-icon.svg";
import movieIcon from "../assets/images/movie-icon.svg";
import seriesIcon from "../assets/images/series-icon.svg";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

function Header() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const username = useSelector(selectUserName);
  const useremail = useSelector(selectUserEmail);
  const userphoto = useSelector(selectUserPhoto);

  function handleAuth() {
    if (!username){
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  } else if (username) {
    auth.signOut().then(()=> {
      dispatch(setSignOutState())
      history(`/`)
    }).catch((error)=> {
      alert(error.message)
    })
  }
}

  function setUser(user) {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  }

  useEffect(()=>{
    auth.onAuthStateChanged(async (user) => {
      if (user){
        history('/home')
      } else {
        history('/')
      }
    })
  }, [username])

  return (
    <>
      <Nav>
        <Logo>
          <img src={DisneyLogo} />
        </Logo>
        {!username ? (
          <Login onClick={handleAuth}>LOGIN</Login>
        ) : (
          <>
            <NavMenu>
              <a href="/">
                <img src={homeIcon} alt="" />
                <span>Home</span>
              </a>
              <a href="/">
                <img src={searchIcon} alt="" />
                <span>Search</span>
              </a>
              <a href="/">
                <img src={watchList} alt="" />
                <span>Watchlist</span>
              </a>
              <a href="/">
                <img src={originalIcon} alt="" />
                <span>Originals</span>
              </a>
              <a href="/">
                <img src={movieIcon} alt="" />
                <span>Movies</span>
              </a>
              <a href="/">
                <img src={seriesIcon} alt="" />
                <span>Series</span>
              </a>
            </NavMenu>
            <SignOut>
            <UserImg src={userphoto} />
            <DropDown>
              <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
            </SignOut>
          </>
        )}
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background-color: #090b12;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  letter-spacing: 12px;
  z-index: 1;
`;

const Logo = styled.a`
  padding: 0;
  width: 76px;
  max-height: 64px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0 px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 24px;

  a {
    display: flex;
    align-items: center;
    padding: 0 8px;

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1;
      }
    }
  }

  img {
    height: 24px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
  }

  span {
    font-size: 16px;
    letter-spacing: 1.5px;
    line-height: 1.1;
    white-space: nowrap;
    position: relative;
    padding: 4px 0;

    &:before {
      content: "";
      background-color: white;
      border-radius: 4px;
      height: 4px;
      opacity: 0;
      position: absolute;
      bottom: -4px;
      right: 0px;
      left: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 300ms cubic-bezier(0.25, 0.45, 0.45, 0.95) 0s;
      visibility: hidden;
      width: auto;
    }
  }
`;

//   @media (max-width: 768px) {
//       // display: none;
//     };

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 12px 16px;
  letter-spacing: 1.6px;
  border: 1px solid white;
  border-radius: 8px;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: white;
    color: black;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 44px;
  right:0px;
  background: rgb(24, 24, 24);
  border: 1px solid rgba(160, 160, 160, 0.36);
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 44%) 0px 0px 20px;
  padding: 12px;
  font-size: 16px;
  letter-spacing: 2px;
  opacity: 0;

`

const SignOut = styled.div`
  position: relative;
  height: 44px;
  width: 44px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover{
    ${DropDown} {
      opacity: 1;
      transition-duration: 1000ms;
    }
  }
`

export default Header;
