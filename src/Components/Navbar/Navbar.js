import React from "react";
import './Navbar.css';
import logo from '../images/logo.png';
import toggle from '../images/toggle.png';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
function Navbar() {
    const history = useHistory();
  return (
       
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light p-3" style={{backgroundColor:' #F6C06A'}}> 
            <div className="container-fluid">
                <a className="navbar-brand" href="https://getbootstrap.com/docs/5.1/components/navbar/">
                    <img src={logo} alt='logo' className='logo'/>{/**Include Logo Image */}
                </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span> <img src={toggle} alt='logo' className='toggle'/></span>

                    </button>{/**Including Toggle Menu */}

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

            {/*Center side Links*/ }
                <ul className="navbar-nav mx-auto" >
                    <li className="nav-item ">
                        <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="https://getbootstrap.com/docs/5.1/components/navbar/">About</a>
                    </li>
                            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#category" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#category">Food</a></li>
                    <li><a className="dropdown-item" href="#category">Grocery</a></li>
                    <li><a className="dropdown-item" href="#category">Health Care</a></li>
                </ul>
                </li>
                    
                </ul>
            {/*Center side Links*/ }    

            {/* Right Side Links*/ }
                <ul className="navbar-nav" >
                    <li className="nav-item">
                        <i className="fa fa-shopping-cart"></i>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn login-button" onClick={() => history.push('/login')}>Log In</button>
                    </li>
                    <li className="nav-item">
                        <button type="button"className='btn signup-button' onClick={() => history.push('/login')}>Sign Up</button>
                    </li>
                </ul>
             {/* Right Side Links*/ }
            </div>
        </div>
    </nav>
</React.Fragment>
  );
}

export default Navbar;