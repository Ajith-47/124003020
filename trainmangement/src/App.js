import React,{useState,useEffect} from "react";
import axios from "axios";
import Welcome from "./Welcome";
import Signin from "./Signin";
import AllTrains from "./AllTrains";
import Trains from "./Train";
import {Routes,Route} from "react-router-dom";

function App() {
  return(
  <div>
  <Routes>

        <Route path="/" exact Component={Welcome}></Route>

        <Route path="/signin" Component={Signin}></Route>
        
        <Route path="/train/trains" Component={AllTrains}></Route>

        <Route path="/train/trains/:id" Component={Trains}></Route>
          
  </Routes>
  </div>
  );
}

export default App;