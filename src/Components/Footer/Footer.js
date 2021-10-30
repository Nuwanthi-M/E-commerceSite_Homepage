import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
  }from "@fortawesome/free-brands-svg-icons";
  import {Link} from 'react-router-dom';
function Footer(){
    return(
        <React.Fragment>
                  <div className='container-fluid' style={{backgroundColor: 'whitesmoke'}}>
                    <div className='container'>
                        <div className='row py-5'>
                            <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                                
                                <ul className=''>
                                    <li><h3>Links</h3></li><br/>
                                    <li><Link to='./mhbody'  style={{textDecoration:'none',color:'black'}}>Home</Link></li>
                                    <li><Link to='./mhbody' style={{textDecoration:'none',color:'black'}}>About</Link></li>
                                    <li><Link to='./mhbody' style={{textDecoration:'none',color:'black'}}>Categorey</Link></li>
                                    </ul>
                            </div>
                     
                            <div className='col-12 col-lg-4 col-md-4 col-sm-12 '>
            
                                <ul>
                                    <li><h3>Help</h3></li><br/>
                                    <li><Link to='./mhbody' style={{textDecoration:'none',color:'black'}}>Contact Us</Link></li>
                                    <li><Link to='./mhbody' style={{textDecoration:'none',color:'black'}}>Support</Link></li>
                                    <li><Link to='./mhbody' style={{textDecoration:'none',color:'black'}}>F&Q</Link></li>
                                    </ul>
                            </div>
                        
                            <div className='col-12 col-lg-4 col-md-4 col-sm-12 '></div>
                        </div>


                        <div className='row'>
                            <div className='col-12 col-lg-4 col-md-4 col-sm-12'></div>
                            <div className='col-12 col-lg-4 col-md-4 col-sm-12 '></div>
                            <div className='col-12 col-lg-4 col-md-4 col-sm-12 text-center'>
                                <a href="https://www.facebook.com/learnbuildteach/" className="facebook social">
                                                        <FontAwesomeIcon icon={faFacebook} className='socialmedia' size="5x"/>
                                                    </a>
                                                                            
                                <a href="https://www.instagram.com/learnbuildteach" className="instagram social">
                                                        <FontAwesomeIcon icon={faInstagram} className='socialmedia' size="5x" />
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