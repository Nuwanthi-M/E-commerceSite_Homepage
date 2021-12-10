import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram}from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Footerlogo from '../images/Footerlogo.png';


const Unorderedlist=styled.ul`
         list-style-type: none;`;

const Customlink=styled.li`
    font-size: 19px;
    margin-top: 10px;
    @media (min-width: 768px) and (max-width:992px){
        font-size: 18px;
        margin-top: 10px;
            }
    @media (min-width:576px) and (max-width: 768px){
        font-size: 18px;
        margin-top: 10px;
        text-align: center;
    }
    @media (min-width:400px) and (max-width: 576px){
        font-size: 17px;
        margin-top: 8px;
        text-align: center;
    }`;

const FooterLogo=styled.img`
    max-width: 360px;
    height: auto;
    @media (min-width: 992px) and (max-width: 1200px){
        max-width: 280px;
        }
    @media (min-width: 768px) and (max-width:992px){
        max-width: 180px;
        }
    @media (min-width:576px) and (max-width: 768px){
        max-width: 120px;
        }
    @media (min-width:400px) and (max-width: 576px){
        max-width: 110px;
        }`;

const Socialmedia=styled(FontAwesomeIcon)`
    padding: 0pc 7px 0px 7px;
    color: black;
    @media (min-width: 768px) and (max-width:992px){
        padding: 0px 10px 0px 10px;
        }
    `;

const Links=styled(Link)`
    text-decoration:none;
    color:black;
    :hover{
        color:red;
    }
`;

const MainContainer=styled.div`
    background-color: whitesmoke;
`;

function Footer(){

    return(
        <React.Fragment>
            <MainContainer className='container-fluid'>
                <div className='container'>
                    <div className='row py-5'>

                        <div className='col-12 col-lg-4 col-sm-12'>
                            < FooterLogo src={Footerlogo} alt='footer'/>
                        </div>

                        <div className='col-12 col-lg-3 col-md-4 col-sm-12'>
                            <Unorderedlist>
                                <Customlink><h4>Links</h4></Customlink><br/>
                                <Customlink><Links to='/'>Home</Links></Customlink>
                                <Customlink><Links to='./'>About</Links></Customlink>
                                <Customlink><Links to='./'>Categorey</Links></Customlink>
                            </Unorderedlist>
                        </div>
                     
                        <div className='col-12 col-lg-3 col-md-4 col-sm-12 '>
                            <Unorderedlist>
                                <Customlink><h4>Help</h4></Customlink><br/>
                                <Customlink><Links to='./'>Contact Us</Links></Customlink>
                                <Customlink><Links to='./'>Support</Links></Customlink>
                                <Customlink><Links to='./'>F&Q</Links></Customlink>
                            </Unorderedlist>
                        </div>
                        
                            <div className='col-12 col-lg-2 col-md-4 col-sm-12 '></div>
                    </div>


                    <div className='row'>
                        <div className='col-12 col-lg-4 col-md-4 col-sm-12'></div>
                        <div className='col-12 col-lg-4 col-md-4 col-sm-12 '></div>
                        <div className='col-12 col-lg-4 col-md-4 col-sm-12 text-center'>
                            <a href="https://www.facebook.com/learnbuildteach/" className="facebook social">
                                <Socialmedia icon={faFacebook} size="4x"/>
                            </a>
                            <a href="https://www.instagram.com/learnbuildteach" className="instagram social">
                                <Socialmedia icon={faInstagram} size="4x" />
                                </a>
                                        <br/><br/><br/>
                        
                        </div>
                    </div>
                </div>
            </MainContainer>
        </React.Fragment>
            );
}
export default Footer;