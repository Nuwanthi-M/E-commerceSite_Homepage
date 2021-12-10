import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';/**Boostrap */
import 'bootstrap-icons/font/bootstrap-icons.css';/**Bootstrap Icon */
import Home from "./Components/home/homepage";


function App() {
  return (
  <React.Fragment>
    <BrowserRouter>
        <Switch>
            <Route path='/'>    
              <Home/>
            </Route>
            
        </Switch>
    </BrowserRouter>
</React.Fragment>
  );
}

export default App;
