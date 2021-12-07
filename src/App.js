import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';/**Boostrap */
import 'bootstrap-icons/font/bootstrap-icons.css';/**Bootstrap Icon */
import Home from "./Components/Home/Home";
import Login from "./Components/Login";

function App() {
  return (
  <React.Fragment>
    <BrowserRouter>
        <Switch>
            <Route path='/login'>    
              <Login/>
            </Route>
            <Route path='/'>    
              <Home/>
            </Route>
            
        </Switch>
    </BrowserRouter>
</React.Fragment>
  );
}

export default App;
