import React, { useState} from "react";
import axios from "axios";

import { Navigate } from "react-router-dom";

function Signin(){
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    
    const [authenticate,setAuthenticate]=useState(false);

    function submitted(e){
        e.preventDefault();

        setAuthenticate(true);

        setUserName("");
        setPassword("");
    }

    if(authenticate){
        return(
            <Navigate to={"/train/trains"} />
        );
    }


  return(

    <div className="sigin-body">
        <h1>Signin</h1>
    
        <form onSubmit={submitted}>
            <input type="text" placeholder="UserName" value={username} onChange={(e)=>setUserName(e.target.value)}></input>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
};

export default Signin;