import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram}from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom';
import styled from 'styled-components';


import Footerlogo from '../images/Footerlogo.png';


const Unorderedlist=styled.ul`
         list-style-type: none;
         margin-bottom:10px;`;
         

const Customlink=styled.li`
        font-size: 19px;
        margin-top: 10px;
    @media (min-width: 768px) and (max-width:992px){
        font-size: 18px;
            }
    @media (min-width:576px) and (max-width: 768px){
        font-size: 18px;
        text-align: center;
    }
    @media (min-width:400px) and (max-width: 576px){
        font-size: 17px;
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
        color:#f4633b;
    }
`;
const Linkhead=styled.h4`
        color: #f4633b;
`;
const MainContainer=styled.div`
    background-color: whitesmoke;
`;
const LastLine=styled.p`
        text-align:right;
    @media (min-width: 400px) and (max-width:768px){
        text-align:center;
        }
`;
const Line=styled.hr`
        color:#f4633b;
`;
function Footer(){

    return(
        <React.Fragment>
            <MainContainer className='container-fluid'>
                <div className='container'>
                    <div className='row py-4'>
                        <div className='col-12 col-lg-4 col-sm-12'>
                            < FooterLogo src={Footerlogo} alt='footer'/>
                        </div>
                        <div className='col-12  col-lg-2 col-md-4 col-sm-12 '></div>
                        <div className='col-12 col-lg-3 col-md-4 col-sm-12'>
                            <Unorderedlist>
                                <Customlink><Linkhead>Links</Linkhead></Customlink><br/>
                                <Customlink><Links to='/'>Home</Links></Customlink>
                                <Customlink><Links to='./'>About Quik</Links></Customlink>
                                <Customlink><Links to='./'>Categories</Links></Customlink><br/>
                            </Unorderedlist>
                        </div>
                     
                        <div className='col-12 col-lg-3 col-md-4 col-sm-12 '>
                            <Unorderedlist>
                                <Customlink><Linkhead>Get Help</Linkhead></Customlink><br/>
                                <Customlink><Links to='./'>Contact Us</Links></Customlink>
                                <Customlink><Links to='./'>Join As Deliverer</Links></Customlink>
                                <Customlink><Links to='./'>Join with Shop</Links></Customlink>
                            </Unorderedlist>
                        </div>        
                    </div>

                        <Line/>

                    <div className='row'>
                        <div className='col-12 col-lg-4 col-md-4 col-sm-12 text-center'>
                            <a href="https://www.facebook.com/learnbuildteach/" className="facebook social" >
                                <Socialmedia icon={faFacebook} size="3x" />
                            </a>
                            <a href="https://www.instagram.com/learnbuildteach" className="instagram social">
                                <Socialmedia icon={faInstagram} size="3x" />
                            </a>
                        </div>        
 
                        <div className='col-12 col-lg-8 col-md-8 col-sm-12 '>
                            <LastLine>Web Development By Computer Science Student- UOR</LastLine>  
                            <LastLine>@2021 All Right Reserved</LastLine>  
                        </div>
                    </div>
                        <br/><br/>                    
                </div>
            </MainContainer>
        </React.Fragment>
            );
}
export default Footer;