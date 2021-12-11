import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';


import logo from '../images/logo.png';
import toggle from '../images/toggle.png';

const Navlogo=styled.img`
    width: 100px;
    height: auto;
    @media (min-width: 992px) and (max-width: 1200px){
        width: 100px;
        height: auto;
        }
    @media (min-width: 768px) and (max-width:992px){
        width: 90px;
        height: auto;
        }
    @media (min-width:576px) and (max-width: 768px){
        width: 80px;
        height: auto;
        padding-bottom: 20px;
        }
    @media (min-width:400px) and (max-width: 576px){
        width: 60px;
        height: auto;
        padding-bottom: 10px;
        }
`;

const Toggler=styled.img`
    width: 38px;
    height: 38px;
    @media (min-width: 400px) and (max-width:768px){
        width: 30px;
        height: 30px;
        }
`;

const LoginButton=styled.button`
    background-color: #ffffff;
    border-color: #f4633b;
    color: #f4633b;
    width: 120px;
    height: 40px;
    font-size: 19px;
    :hover {
        background-color: #f4633b;
      }
    @media (min-width: 992px) and (max-width: 1200px){
        font-size: 18px;
        width: 100px;
        }
    @media (min-width: 768px) and (max-width:992px){
        font-size: 18px;
        width: 100px;
        }
    @media (min-width:576px) and (max-width: 768px){
        font-size: 18px;
        width: 100px;
        }
    @media (min-width:400px) and (max-width: 576px){
        font-size: 17px;
        width: 70px;
        }
    @media (min-width:400px) and (max-width: 576px){
        font-size: 17px;
        width: 90px;
            }
`;

const SignupButton=styled.button`
    font-size: 20px;
    background-color: #f4633b;
    border-color: #f4633b;
    color: "black";
    width: 120px;
    height: 40px;
    :hover {
        border-color: #f4633b;
        background-color: white;
        color: #f4633b;
      }
    @media (min-width: 992px) and (max-width: 1200px){
        width: 100px;
        font-size: 19px;
        }
    @media (min-width: 768px) and (max-width:992px){
        width: 100px;
        font-size: 19px;
        }
    @media (min-width:576px) and (max-width: 768px){
        width: 100px;
        font-size: 18px;
        }
    @media (min-width:400px) and (max-width: 576px){
        font-size: 17px;
        width: 90px;
                }
    
`;

const Navitem=styled.li`
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    padding: 10px 15px 5px 15px;
    @media (min-width: 992px) and (max-width: 1200px){
        font-size: 19px;
        padding: 3px 5px 5px 5px;
        }
    @media (min-width: 768px) and (max-width:992px){
        font-size: 19px;
        text-align: center;
        :hover {
            background-color: #f0cd95;
          }
        }
    @media (min-width:576px) and (max-width: 768px){
        font-size: 18px;
        text-align: center;
        :hover {
            background-color: #f0cd95;
          }
        }
    @media (min-width:400px) and (max-width: 576px){
        font-size: 17px;
        text-align: center;
        :hover {
            background-color: #f0cd95;
          }
        }
`;

const Dropdownmenu=styled.ul`
    background-color: #f6c06a;
    width: 220px;
    border-color: #f6c06a;
    @media (min-width: 768px) and (max-width:992px){
        width: 100%;
        text-align: center;
        }
        @media (min-width: 400px) and (max-width:768px){
            width: 100%;
            text-align: center;
            }
`;
const Dropdownitem=styled.a`
    font-size: 19px;
    color:black;
    :hover {
        background-color: #f0cd95;
        color:black;
      }
    @media (min-width: 992px) and (max-width: 1200px){
        font-size: 19px;
        }
    @media (min-width: 768px) and (max-width:992px){
        font-size: 19px;
        }
    @media (min-width:576px) and (max-width: 768px){
        font-size: 18px;
        }
    @media (min-width:400px) and (max-width: 576px){
        font-size: 16px;
        }
`;

const MainContainer=styled.nav`
    background-color: #F6C06A;
`;

function Navbar() {

    const history = useHistory();


  return (
       
    <React.Fragment>
        <MainContainer className="navbar navbar-expand-lg navbar-light p-3" > 
            <div className="container-fluid">
                <a className="navbar-brand" href="https://getbootstrap.com/docs/5.1/components/navbar/">
                    <Navlogo src={logo} alt='logo'/>{/**=============================Include Logo Image========================================= */}
                </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span> <Toggler src={toggle} alt='logo' className='toggle'/></span>

                    </button>{/**=================================Including Toggle Menu ========================================*/}

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

            {/*===========================================Center side Links================================================*/ }
                <ul className="navbar-nav mx-auto" >
                    <Navitem className="nav-item ">
                        <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                    </Navitem>
                    <Navitem className="nav-item ">
                        <Link className="nav-link active" aria-current="page" to='/'>About</Link>
                    </Navitem>
                            <Navitem className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#category" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                </a>
                <Dropdownmenu className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>< Dropdownitem  className="dropdown-item" tag={Link} to="/">Food</Dropdownitem ></li>
                    <li>< Dropdownitem  className="dropdown-item" tag={Link} to="/">Grocery</Dropdownitem ></li>
                    <li>< Dropdownitem  className="dropdown-item" tag={Link} to="/">Health Care</Dropdownitem ></li>
                </Dropdownmenu>
                </Navitem>
                    
                </ul>
            {/*=============================================Center side Links==================================================*/ }    

            {/* ===============================================Right Side Links================================================*/ }
                <ul className="navbar-nav" >
                    <Navitem className="nav-item">
                        <i className="fa fa-shopping-cart"></i>
                    </Navitem>
                    <Navitem className="nav-item">
                        <LoginButton type="button" className="btn" onClick={() => history.push('./')}>Log In</LoginButton>
                    </Navitem>
                    <Navitem className="nav-item">
                        <SignupButton type="button" className="btn" onClick={() => history.push('./')}>Sign Up</SignupButton>
                    </Navitem>
                </ul>
             {/*========================================== Right Side Links==================================================*/ }
            </div>
        </div>
    </MainContainer>
</React.Fragment>
  );
}

export default Navbar;