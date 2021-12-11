import React from "react";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Carousel from 'react-grid-carousel';
import {HomeComponent1,HomeComponent2, HomeComponent3,HomeComponent4,HomeComponent5}from './home-component';



import home1 from '../images/home1.png';
import home2 from '../images/home2.png';
import home3 from '../images/home3.png';
import home4 from '../images/home4.png';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import food from '../images/food.png';
import food1 from '../images/food1.png';
import food2 from '../images/food2.png';
import food3 from '../images/food3.png';
import grocery from '../images/grocery.png';
import grocery1 from '../images/grocery1.png';
import grocery2 from '../images/grocery2.png';
import grocery3 from '../images/grocery3.png';
import medicine from '../images/medicine.png';
import medicine1 from '../images/medicine1.png';
import medicine2 from '../images/medicine2.png';
import medicine3 from '../images/medicine3.png';



const ShopContent=styled.div`
    background-color:#F8F7E9;
`;
const DelivererContent=styled.div`
    background-color:#FE432E;
`;
const CustomerContent=styled.div`
    background-image:linear-gradient(180deg, #F6C06A 0%, rgba(254, 141, 110, 0) 100%);    
`;
const CuroesulContent=styled.div`
    background-color:white;    
`;
const OrderprocessContent=styled.div`
    background-color:#F8F7E9;    
`;
const Custommargin=styled.div`
@media (min-width: 992px) and (max-width:1200px){
    padding-left:30px;
    }   
@media (min-width: 768px) and (max-width:992px){
    padding-left:40px;
    }   
`;

const Rowstyle=styled.div`
    height: 100px;
@media (min-width: 992px) and (max-width: 1200px){
    height: 70px;
    }
@media (min-width: 768px) and (max-width:992px){
    height: 70px;
    }
@media (min-width:576px) and (max-width: 768px){
    height: 0px;
    }
@media (min-width:400px) and (max-width: 576px){
    height: 10px;
    }
`;

function CustomerSection(){
    const history = useHistory();
    return(
        <div>
            <CustomerContent className='container-fluid'>
                <div className='container'>
                    <Rowstyle className='row'></Rowstyle>
                        <div className='row'>
                            <div className='col-12 col-lg-5 col-md-6'>
                                    <HomeComponent1
                                        frist1='Order ' frist2='Product' second1='In A ' second2='Easy Way'
                                        pharagraph='Now we have made it easy to order from different shops at a time.Just order what you need through us.
                                                    we will bring it to your doorstep quickly and safely from Quik.' 
                                        label='Register Now'
                                        color1='#FD402C'
                                        handleClick={() => history.push('/login') }/>
                                </div>
                            <div className='col-12 col-lg-7 col-md-6 text-center'>
                                <HomeComponent3 homeimage={home1}/>
                            </div>
                        </div>
                    </div>
                </CustomerContent>           
            </div>
    );
}


function CuroesulSection(){
    return(
        <div>
            <CuroesulContent className='container-fluid'>
                <div className='container'>
                    <div className='row py-4'>
                              <Carousel cols={3} rows={1} gap={4}
                                    responsiveLayout={[
                                        { breakpoint: 1200, cols: 3
                                        },
                                        {
                                        breakpoint: 990, cols: 3
                                        },
                                        {
                                        breakpoint: 768, cols: 1
                                        },
                                        {
                                        breakpoint: 576, cols: 1
                                        },
                                        {
                                        breakpoint: 400, cols: 1
                                        }
                                    ]}
                                    mobileBreakpoint={395}>
                                            <Carousel.Item >
                                            <HomeComponent2 cat={food}  cat1={food1} cat2={food2} cat3={food3} categoryname='Food'/>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                            <HomeComponent2 cat={grocery} cat1={grocery1} cat2={grocery2} cat3={grocery3} categoryname='Grocery'/>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                            <HomeComponent2 cat={medicine}  cat1={medicine1} cat2={medicine2} cat3={medicine3} categoryname='HealthCare'/>
                                            </Carousel.Item>
                                            </Carousel>
                            </div>
                        </div>
                    </CuroesulContent>
                </div>
    );
}


function OrderprocessSection(){
    const history = useHistory();
    return(
        <div>
            < OrderprocessContent className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-6 order-sm-2 order-lg-1 order-md-1'>
                            <HomeComponent4 homeimage={home2}/>
                        </div>
                        < Custommargin className='col-sm-12 col-md-6 col-lg-6 order-sm-1  order-lg-2 order-md-2'>
                            <HomeComponent5 icon1={icon1} icon2={icon2} icon3={icon3}   label='Order Now' handleClick={() => history.push('/')} />
                        </ Custommargin>
                    </div>
                </div> <br/>
            </ OrderprocessContent>   
        </div>
    );
}




function DelivererSection(){
    const history = useHistory();
    return(
        <div>
            <DelivererContent className='container-fluid'>
                <div className='container'>
                    <div className='row' >
                        <div className='col-12 col-lg-6 col-md-6'>
                            <HomeComponent1
                                frist1='To Earn' frist2=' Extra'  second1='Income' second2=' Join As a' third='Delivery Boy'
                                pharagraph='Want to become Quik rider and earn money.Very easy ,all you need is a phone and a sutaible vehicle.
                                            Accept the order request and finish it in the best way and earn a better amount.' 
                                label='Apply Now'
                                color2='white'
                                handleClick={() => history.push('/') }
                            />
                        </div>
        
                        <div className='col-12 col-lg-6 col-md-6'>
                            <HomeComponent4  homeimage={home3}/>
                        <br/><br/>
                        </div>
                    </div>
                </div>
                <br/>
            </DelivererContent>    
        </div>
    );
}




function ShopSection(){
    const history = useHistory();
    return(
        <div>
            <ShopContent className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 col-md-6 order-sm-2 order-lg-1 order-md-1'>
                        <HomeComponent4 homeimage={home4}/>
                        </div>
                            
                        < Custommargin className='col-12 col-lg-6 col-md-6 order-sm-1 order-lg-2 order-md-2'>
                        <HomeComponent1
                                frist1='To Find' frist2=' More Customers' second1='Register Your'  third='Shop/Resturent'
                                pharagraph='Do not your shop have delivery staffs,Want to catch more customers and increse your business quickly.Do not worry
                                             join with us.'
                                label='Join Now'
                                color2='#F5643C'
                                handleClick={() => history.push('/') }/>
                        </ Custommargin>
                    </div>
                </div>
                <br/><br/><br/><br/>
            </ShopContent>
        </div>
    );
}


export {ShopSection,DelivererSection,CustomerSection,CuroesulSection,OrderprocessSection};