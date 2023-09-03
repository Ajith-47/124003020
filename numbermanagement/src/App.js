import React,{useState,useEffect} from "react";
import axios from "axios";

function App() {
  const [data,setData]=useState([]);
  useEffect(function(){
    const url=[
      "http://20.244.56.144/numbers/primes",
      "http://20.244.56.144/numbers/fibo",
      "http://20.244.56.144/numbers/odd",
    ];

    axios.get("http://localhost:4000/numbers",{
      params:{url:url},
    })
    .then(function(response){
      console.log(response.data);
      setData(response.data);
    })
    .catch(function(err){
      console.log("Error ocuured");
    });
  },[]);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;