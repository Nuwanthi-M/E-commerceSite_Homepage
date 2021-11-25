import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';/**Boostrap */
import 'bootstrap-icons/font/bootstrap-icons.css';/**Bootstrap Icon */
import Mainhome from "./Components/Mainhome/Mainhome";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
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
              <Mainhome/>
            </Route>
            
        </Switch>
    </BrowserRouter>
</React.Fragment>
  );
}

export default App;
