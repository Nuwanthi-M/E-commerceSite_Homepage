import React from "react";
import {MainhomeComponent1,MainhomeComponent2}from './MhComponent';
import Carousel from 'react-grid-carousel';
import './Mhbody.css';
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
import Footer from "../Footer/Footer";
function Homebody(){
    return(
        
    <React.Fragment>

{/**Frist Container,Calling navbar component */}
                <div className='container-fluid' style={{backgroundImage:' linear-gradient(180deg, #F6C06A 0%, rgba(254, 141, 110, 0) 100%)'}} >
                    <div className='container'>
                    <div className='row row-style'></div>
                        <div className='row'>
                            <div className='col-12 col-lg-5 col-md-6'>
                     {/**Components used */}
                            <MainhomeComponent1
                                frist1='Get ' frist2='Product'
                                second1='In A ' second2='Easy Way'
                                pharagraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est porta porttitor i suspendisse luctus 
                                    aliquet bibendum varius.Cras mr adipiscing elit. Est porta porttitor interdum tempus. Turpis aliquam' 
                                buttonname='Register Now'
                                color1='#FD402C'/>
                     {/**Components used */}
                            </div>

                            <div className='col-12 col-lg-7 col-md-6 text-center'>
                                <img src={home1} alt='home' className='home-image ' />
                            </div>

                        </div>
                    </div>
                </div>           
{/**end of the Container */}
        

{/**Starting Second Row */}
                <div className='container-fluid' style={{backgroundColor: 'white'}}>
                    <div className='container'>
                        <div className='row py-5'>
                          {/*  <div className='col-12 col-lg-4 col-md-4 col-sm-12 '>
                                <MainhomeComponent2 cat={food}  cat1={food1} cat2={food2} cat3={food3} categoryname='Food'/>
                            </div>
                            <div className='col-12 col-lg-4 col-md-4 col-sm-12 '>
                                <MainhomeComponent2 cat={grocery} cat1={grocery1} cat2={grocery2} cat3={grocery3} categoryname='Grocery'/>
                            </div>
                            <div className='col-12 col-lg-4 col-md-4 col-sm-12 '>
                                <MainhomeComponent2 cat={medicine}  cat1={medicine1} cat2={medicine2} cat3={medicine3} categoryname='HealthCare'/>
                             </div>*/}
                              <Carousel
                                    cols={3}
                                    rows={1}
                                    gap={10}

                                    responsiveLayout={[
                                        {
                                        breakpoint: 1200,
                                        cols: 3
                                        },
                                        {
                                        breakpoint: 990,
                                        cols: 3
                                        },
                                        {
                                            breakpoint: 768,
                                            cols: 1
                                        }
                                    ]}
                                    mobileBreakpoint={500}

                                    >
                                            <Carousel.Item >
                                            <MainhomeComponent2 cat={food}  cat1={food1} cat2={food2} cat3={food3} categoryname='Food'/>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                            <MainhomeComponent2 cat={grocery} cat1={grocery1} cat2={grocery2} cat3={grocery3} categoryname='Grocery'/>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                            <MainhomeComponent2 cat={medicine}  cat1={medicine1} cat2={medicine2} cat3={medicine3} categoryname='HealthCare'/>
                                            </Carousel.Item>
                                            </Carousel>

                        </div>
                    </div>
                </div>
{/**Ending second Row */}





{/**Starting third Row */}
            <div className='container-fluid' style={{backgroundColor: '#F8F7E9'}}>
                <div className='container'>
                    <div className='row'>
                        
                        <div className='col-sm-12 col-md-6 col-lg-6 order-sm-2 order-lg-1 order-md-1'>
                            <img src={home2} alt='shopping' className='py-5 sub-image'/>
                        </div>

                        <div className='col-sm-12 col-md-6 col-lg-6 order-sm-1  order-lg-2 order-md-2'>
                            <h1 className='py-3  home-heading'>
                                <strong><span style={{color:'#FE432E'}}>Simple Process </span><span>To</span><br/>Make Order Your Favourite Foods/</strong>
                            </h1>
                            <br/>
                            <p className='process'><b>Step 1</b> <span style={{paddingLeft:'5px'}}><img src={icon1} alt='location'  className='processlogo'/></span><span style={{paddingLeft:'5px'}}> Set Your Location Frist</span></p> 
                            <p className='process'><b>Step 2</b> <span style={{paddingLeft:'5px'}}><img src={icon3} alt='location' className='processlogo'/> </span><span style={{paddingLeft:'5px'}}>  Choose the Food You Want to Order</span></p> 
                            <p className='process'><b>Step 3</b> <span style={{paddingLeft:'5px'}}><img src={icon2} alt='location' className='processlogo'/> </span><span style={{paddingLeft:'5px'}}>  Confirm Order with Payment Method</span></p> 
                          
                            <div className='py-4'>
                                <button className='btn home-button'>Order Now</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
{/**Ending of the third row */}





{/**Starting forth Row */}
            <div className='container-fluid' style={{backgroundColor:'#FE432E'}}>
                <div className='container'>
                    <div className='row' >
                        <div className='col-12 col-lg-6 col-md-6'>
    {/**Components used */}
                            <MainhomeComponent1
                                frist1='Want To' frist2=' Earn Extra '
                                second1='Eith Us' second2=' Join As a '
                                third='Delivery Boy'
                                pharagraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est porta porttitor i suspendisse luctus 
                                    aliquet bibendum varius.Cras mr adipiscing elit. Est porta porttitor interdum tempus. Turpis aliquam' 
                                buttonname='Apply Now'
                                color2='white'/>
    {/**Components used */}
                        </div>
                            
                        <div className='col-12 col-lg-6 col-md-6'>
                            <img src={home3} alt='shopping'className='py-5 sub-image'/>
                        </div>
                    </div>
                </div>
            </div>
{/**Ending of the forth row */}




{/**Starting fifth Row */}
            <div className='container-fluid' style={{backgroundColor: '#F8F7E9'}}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 col-md-6 order-sm-2 order-lg-1 order-md-1'>
                            <img src={home4} alt='shopping' className='py-5 sub-image'/>
                        </div>
                            
                        <div className='col-12 col-lg-6 col-md-6 order-sm-1 order-lg-2 order-md-2'>
    {/**Components reused */}
                        <MainhomeComponent1
                                frist1='Want To' frist2=' Find More '
                                second1='Customers ' 
                                third='Register Your'
                                forth='Shop/Resturent'
                                pharagraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est porta porttitor i suspendisse luctus 
                                    aliquet bibendum varius.Cras mr adipiscing elit. Est porta porttitor interdum tempus. Turpis aliquam' 
                                buttonname='Join Now'
                                color2='#F5643C'/>
    {/**Components reused */}
                        </div>
                    </div>
                </div>
          </div>
{/**Ending fifth Row */}
            <Footer/>
</React.Fragment>

        

    );
}
export default Homebody;