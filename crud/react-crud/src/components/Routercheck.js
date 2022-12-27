import React from 'react'
import { Link } from "react-router-dom";
// import TraineesComponent from './TraineesComponent';
// import TraineesList from './TraineesList';
// import { Menu } from 'semantic-ui-react'




export default function Routercheck() {
  return (
    <>
    <nav style={{fontSize:20,border:'2px solid red',fontSize:20,border:'2px solid red', display:'flex',justifyContent:'space-around'}} >    
      
             
            <Link to="/create" style={{color: "black",}}>Home</Link>
          
           
            <Link to="/read" style={{color: "black",}}>Services</Link>
        
    
            <Link to="/Contactus" style={{color: "black",}}>Contactu</Link>
        
        
            <Link to="/trainees" style={{color: "black",}}>trainees</Link>
            
      </nav>
      
      {/* <Outlet /> */}
      </>
  )
}

