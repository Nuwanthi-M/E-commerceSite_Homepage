import React from "react";
import styled from 'styled-components';

import bell from '../images/bell.png';

const Heading=styled.h1`
    font-size: 55px;
    margin-top: 80px;
    @media (min-width: 992px) and (max-width: 1200px){
      font-size: 47px;
      margin-top: 40px;
      }
  @media (min-width: 768px) and (max-width:992px){
      font-size: 35px;
      margin-top: 25px;
      }
  @media (min-width:576px) and (max-width: 768px){
      font-size: 45px;
      text-align: center;
      margin-top: 60px;
      }
  @media (min-width:400px) and (max-width: 576px){
      font-size: 36px;
      text-align: center;
      margin-top: 30px;
      }

`;

const Paragraph=styled.p`
  font-size: 20px;
  @media (min-width: 992px) and (max-width: 1200px){
    font-size: 18px;
    }
@media (min-width: 768px) and (max-width:992px){
    font-size: 17px;
    }
@media (min-width:576px) and (max-width: 768px){
    font-size: 18px;
    text-align: center;
    }
@media (min-width:400px) and (max-width: 576px){
    font-size: 16px;
    text-align: center;
    }

`;

const Homebutton=styled.button`
width: 200px;
height: 50px;
border-color: #32303a;
background-color: #32303a;
color: #f8b742;
border-radius: 5px;
:hover {
  color: #141414;
  background-color: #b4b1af;
  border-color: #b4b1af;
  }
@media (min-width: 992px) and (max-width: 1200px){
    width: 160px;
    height: 45px;
    }
@media (min-width: 768px) and (max-width:992px){
    width: 140px;
    height: 40px;
    font-size: 16px;
    }
@media (min-width:576px) and (max-width: 768px){
    width: 100%;
    height: 50px;
    }
@media (min-width:400px) and (max-width: 576px){
    font-size: 16px;
    height:40px;
    width: 100%;
    margin-bottom:30px;
    }
`;


const Categoreybutton=styled.button`
border-radius: 30px;
background-color: #f6c06a;
width: 150px;
height: 50px;
@media (min-width: 992px) and (max-width: 1200px){
   
    }
@media (min-width: 768px) and (max-width:992px){
    border-radius: 20px;
    width: 140px;
    height: 40px;
    }
@media (min-width:576px) and (max-width: 768px){
   
 
    }
@media (min-width:400px) and (max-width: 576px){
    border-radius: 20px;
    width: 140px;
    height: 40px;
    }
`;

const Bellicon=styled.img`
  width: 23px;
  height: 23px;
  margin-right: 13px;
@media (min-width: 992px) and (max-width: 1200px){
    width: 23px;
    height: 23px;
    margin-right: 13px;
    }
@media (min-width: 768px) and (max-width:992px){
    width: 23px;
    height: 23px;
    margin-right: 10px;
    }
@media (min-width:576px) and (max-width: 768px){
    width: 23px;
    height: 23px;
    margin-right: 13px;
    }
@media (min-width:400px) and (max-width: 576px){
    width: 21px;
    height: 21px;
    margin-right: 13px;
    }
`;

const Category=styled.img`
position: absolute;
width: 200px;
height: 110px;
left: 50%;
border-radius: 15px;
@media (min-width: 992px) and (max-width: 1200px){
  width: 170px;
  height: 95px;
  left: 40%;
    }
@media (min-width: 768px) and (max-width:992px){
  width: 130px;
  height: 70px;
  left: 40%;
    }
@media (min-width:576px) and (max-width: 768px){
  width: 210px;
  height: 114px;
  left: 50%;
    }
@media (min-width:480px) and (max-width: 576px){
  width: 160px;
  height: 85px;
  left:50%;
    }
@media (min-width:400px) and (max-width: 480px){
    width: 160px;
    height: 85px;
    left:40%;
          }
`;

const Mainimg=styled.img`
width: 270px;
height: 420px;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.56) 7px 7px 7px 7px;
@media (min-width: 992px) and (max-width: 1200px){
  width: 230px;
  height: 340px;
  box-shadow: rgba(0, 0, 0, 0.56) 3px 3px 3px 3px;
    }
@media (min-width: 768px) and (max-width:992px){
  width: 180px;
  height: 280px;
  box-shadow: rgba(0, 0, 0, 0.56) 2px 2px 2px 2px;
    }
@media (min-width:576px) and (max-width: 768px){
  width: 330px;
    height: 430px;
    }
@media (min-width:400px) and (max-width: 576px){
  width: 210px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.56) 3px 3px 3px 3px;
    }
`;

const Categoreylist=styled.div`
position: relative;
`;

const HomeImg=styled.img`
max-width: 630px;
height: auto;
margin-top: 40px;
margin-bottom: 100px;
@media (min-width: 992px) and (max-width: 1200px){
    width: 520px;
    height: auto;
    margin-top: 30px;
    margin-bottom: 50px;
    }
@media (min-width: 768px) and (max-width:992px){
    max-width: 360px;
    height: auto;
    }
@media (min-width:576px) and (max-width: 768px){
    max-width: 530px;
    height: auto;
    margin-top: 30px;
    margin-bottom: 50px;
    }
@media (min-width:480px) and (max-width: 576px){
    max-width: 440px;
    margin-top: 30px;
    margin-bottom: 50px;
    }
    @media (min-width:400px) and (max-width: 480px){
        max-width: 350px;
        height: auto;
        margin-top: 30px;
        margin-bottom: 50px;   
        }
`;

const SubImg=styled.img`
width: 580px;
height: auto;
margin-top: 100px;
margin-bottom: 30px;
@media (min-width: 1200px) and (max-width: 1400px){
    width: 520px;
    height: auto;
    margin-top: 40px;
    margin-bottom: 80px;
    }
@media (min-width: 992px) and (max-width: 1200px){
    width: 450px;
    height: auto;
    margin-top: 40px;
    margin-bottom: 50px;
    }
@media (min-width: 768px) and (max-width:992px){
    width: 350px;
    height: auto;
    margin-top: 110px;
    margin-bottom: 30px;
    }
@media (min-width:576px) and (max-width: 768px){
    width: 510px;
    height: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    }
@media (min-width:480px) and (max-width: 576px){
    max-width: 440px;
    height: auto;
    margin-top: 40px;
    margin-bottom: 50px;
    }
    @media (min-width:400px) and (max-width: 480px){
        max-width: 350px;
        height: auto;
        margin-top: 30px;
        margin-bottom: 50px;   
        }
`;

const Process=styled.p`
font-size: 20px;
font-weight: 400;
@media (min-width: 992px) and (max-width: 1200px){
    font-size: 18px;
    font-weight: 400;
    }
@media (min-width: 768px) and (max-width:992px){
    font-size: 16px;
    font-weight: 400;
    }
@media (min-width:576px) and (max-width: 768px){
    font-size: 18px;
    font-weight: 400;
    }
@media (min-width:400px) and (max-width: 576px){
    font-size: 16px;
    font-weight: 400;
    }
`;

const Processlogo=styled.img`
    width: 50px;
    height: auto;
    border-radius: 100%;
    border: 5px solid rgb(230, 58, 6);
@media (min-width: 992px) and (max-width: 1200px){
    width: 40px;
    height: auto;
    border-radius: 100%;
    border: 3px solid rgb(230, 58, 6);
    }
@media (min-width: 768px) and (max-width:992px){
    width: 30px;
    border: 3px solid rgb(230, 58, 6);
    }
@media (min-width:576px) and (max-width: 768px){
    width: 50px;
    border: 3px solid rgb(230, 58, 6);
    }
@media (min-width:400px) and (max-width: 576px){
    width: 50px;
    border: 2px solid rgb(230, 58, 6);
    }
`;


function HomeComponent1(props,style){
    return(
          <React.Fragment>
            < Heading className='py-3'>
                <strong style={{color: props.color1}}>{props.frist1}</strong><strong style={{color: props.color2}}>{props.frist2}</strong>
                    <br/>
                <strong style={{color: props.color2}}>{props.second1}</strong><strong style={{color: props.color1}}>{props.second2}</strong>
                    <br/>
                <strong>{props.third}</strong>
                <strong>{props.forth}</strong>
            </Heading>

            <Paragraph className=' py-3' >
                {props.pharagraph}
            </Paragraph>

            <div className='py-3'>
                <Homebutton className='btn  btn-default'  onClick={props.handleClick}>{props.label}</Homebutton>
            </div>
          </React.Fragment>
        );
}


function HomeComponent2(props){
    return(
        <React.Fragment>
            <div className='text-center'>
                <div className='text-center py-4'>
                    <Categoreybutton className='btn' >
                        <Bellicon src={bell} alt='bell icon'/><span>{props.categoryname}</span>
                    </Categoreybutton> 
                </div>

                <Categoreylist>
                    <Category src={props.cat1}  alt='item1'  style={{top:'5%'}} />
                    <Category src={props.cat2}  alt='item2' style={{top:'37%'}} />
                    <Category src={props.cat3}  alt='item3' style={{top:'68%'}} />
                    < Mainimg src={props.cat} alt='main-item'/>
                </Categoreylist>
                <br/><br/>
            </div>
        </React.Fragment>
        );
}

function HomeComponent3(props){
    return(
        <React.Fragment>
                    <HomeImg src={props.homeimage}  alt='home' />
        </React.Fragment>
        );
}
function HomeComponent4(props){
    return(
        <React.Fragment>
                    <SubImg src={props.homeimage}  alt='home' />
        </React.Fragment>
        );
}
function HomeComponent5(props){
    return(
        <React.Fragment>
             <Heading className='py-3'>
                <strong style={{color:'#FE432E'}}>Simple Process </strong><strong>To<br/>Make Order Your Favourite Foods/</strong>
            </Heading>
                <br/>
                    <Process><b>Step 1</b> <span style={{paddingLeft:'5px'}}><Processlogo src={props.icon1} alt='location'/></span><span style={{paddingLeft:'5px'}}> Set Your Location Frist</span></Process> 
                    <Process><b>Step 2</b> <span style={{paddingLeft:'5px'}}><Processlogo  src={props.icon3} alt='location'/> </span><span style={{paddingLeft:'5px'}}>  Choose the Food You Want to Order</span></Process> 
                    <Process><b>Step 3</b> <span style={{paddingLeft:'5px'}}><Processlogo  src={props.icon2} alt='location'/> </span><span style={{paddingLeft:'5px'}}>  Confirm Order with Payment Method</span></Process> 
                          
                    <div className='py-3'>
                        <Homebutton className='btn  btn-default'  onClick={props.handleClick}>{props.label}</Homebutton>
                    </div>
                    
        </React.Fragment>
        );
}



export {HomeComponent1,HomeComponent2,HomeComponent3,HomeComponent4,HomeComponent5};