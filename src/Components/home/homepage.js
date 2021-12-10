import React from "react";
import {ShopSection,DelivererSection,CustomerSection,CuroesulSection,OrderprocessSection} from './home-container';
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";




function Home(){

    return(
        <div>
            <Navbar/>
            <CustomerSection/>
            <CuroesulSection/>
            <OrderprocessSection/>
            <DelivererSection/>
            <ShopSection/>
            <Footer/>
        </div>
                
    );
}
export default Home;

