import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const HOC = () => {

    const token = localStorage.getItem("token")
 
  const Navigate=useNavigate()
   

    useEffect(()=>{
        if (!token) {
            Navigate("/login")
           }
    },[])

    return (
        <div>
      
          <Outlet /> 
       
        </div>
      );
    };



  export default HOC