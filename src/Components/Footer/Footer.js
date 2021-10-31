import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
  }from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom';
import Footerlogo from '../images/Footerlogo.png';
function Footer(){
    return(
        <React.Fragment>
                  <div className='container-fluid' style={{backgroundColor: 'whitesmoke'}}>
                    <div className='container'>
                        <div className='row py-5'>
                        <div className='col-12 col-lg-4 col-sm-12'>
                            <img src={Footerlogo} alt='footer' className='footerlogo'/>
                        </div>
                            <div className='col-12 col-lg-3 col-md-4 col-sm-12'>
                                
                                <ul className=''>
                                    <li><h4>Links</h4></li><br/>
                                    <li><Link to='./mhbody'  style={{textDecoration:'none',color:'black'}}>Home</Link></li>
                                    <li><Link to='./mhbody' style={{textDecoration:'none',color:'black'}}>About</Link></li>
                                    <li><Link to='./mhbody' style={{textDecoration:'none',color:'black'}}>Categorey</Link></li>
                                    </ul>
                            </div>
                     
                            <div className='col-12 col-lg-3 col-md-4 col-sm-12 '>
            
                                <ul>
                                    <li><h4>Help</h4></li><br/>
                                    <li><Link to='./mhbody' style={{textDecoration:'none',color:'black'}}>Contact Us</Link></li>
                                    <li><Link to='./mhbody' style={{textDecoration:'none',color:'black'}}>Support</Link></li>
                                    <li><Link to='./mhbody' style={{textDecoration:'none',color:'black'}}>F&Q</Link></li>
                                    </ul>
                            </div>
                        
                            <div className='col-12 col-lg-2 col-md-4 col-sm-12 '></div>
                        </div>


                        <div className='row'>
                            <div className='col-12 col-lg-4 col-md-4 col-sm-12'></div>
                            <div className='col-12 col-lg-4 col-md-4 col-sm-12 '></div>
                            <div className='col-12 col-lg-4 col-md-4 col-sm-12 text-center'>
                                <a href="https://www.facebook.com/learnbuildteach/" className="facebook social">
                                                        <FontAwesomeIcon icon={faFacebook} className='socialmedia' size="4x"/>
                                                    </a>
                                                                            
                                <a href="https://www.instagram.com/learnbuildteach" className="instagram social">
                                                        <FontAwesomeIcon icon={faInstagram} className='socialmedia' size="4x" />
                                                    </a>
                                                    <br/><br/><br/>
                        
                            </div>
                        </div>

                    </div>
                </div>
        </React.Fragment>
            );
}
export default Footer;