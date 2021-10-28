import React from "react";
import Homebody from './Mainhome/Mhbody';
import Navbar from "./Navbar/Navbar";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
function Mainpage() {
  return (
   <React.Fragment>
        <BrowserRouter>
            <Navbar/>

            <Switch>
                <Route path='/'>    
                    <Homebody/>
                    </Route>
            </Switch>
        </BrowserRouter>
   </React.Fragment>
  );
}

export default Mainpage;