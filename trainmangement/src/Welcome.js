import React from "react";
import { Link } from "react-router-dom";

function Welcome(){
  return(
    <main>
        <h1>Welcome</h1>
        <Link to="/signin">Signin</Link>
        
        <Link to="//train/trains">Show All Trains</Link>
        
        <Link to="/signin">Show Specific Time</Link>
        
    </main>
  )
};

export default Welcome;