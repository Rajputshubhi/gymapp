import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Nextbutton = () => {
	return (
		<>
		<div className="container-fluid">
           <div>
			   
								
								<button style={{background:"green",
				                marginLeft:"87%",
								width:"100px",
								height:"40px",
								outline:"none",
								borderRadius:"4px",
								border:"none",
								fontSize:"18px",
								fontFamily:"monospace"}}><NavLink to="/pricing/pricecontact/payment" style={{textDecorationLine:"none",
								color:"white"}}>NEXT <FaArrowCircleRight /></NavLink> </button>
							
		   </div>	
		</div>
		</>
		
	)
}

export default Nextbutton
