import { Children } from "react";
import { Navigate } from "react-router-dom";


const Privateroute=({isloggedin})=>{
  
  if(isloggedin){
    return Children;
  }else{
    
    return <Navigate to="/login"/>
  }
}
export default Privateroute;