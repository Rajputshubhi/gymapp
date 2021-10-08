import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';


const Price = (props) => {


	return (
		<>
		 <div className="container-fluid">
		    <div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="card price-card" style={{ backgroundImage:`linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${props.image})`,
					  backgroundSize:"cover",
					  backgroundRepeat:"no-repeat",
					   }}>
                           <div className="card-body">
							   <h6 className="text-center text-warning">BILLED MONTHLY</h6>
							  <p className="text-center text-white" style={{fontSize:"15px"}}>{props.paragraph}</p> 
							  <h1 className="text-center text-warning" style={{letterSpacing:"-2px"}}>{props.rs}</h1>
							  <p style={{textAlign:"center",
							  color:"white",
							  fontSize:"11px",
							  marginBottom:"5px"}}><AiOutlineCheck /> Mobile-optimized</p>
							  <p style={{textAlign:"center",
							  marginBottom:"5px",
							  color:"white",
							  fontSize:"11px"}}><AiOutlineCheck /> Best-Hoisting</p>
							  <p style={{textAlign:"center",
							  color:"white",
							  marginBottom:"5px",
							  fontSize:"11px"}}><AiOutlineCheck /> Free-Custom</p>
							  <p style={{textAlign:"center",
							  color:"white",
							  marginBottom:"5px",
							  fontSize:"11px"}}><AiOutlineCheck /> Outstanding</p>
							  <p style={{textAlign:"center",
							  color:"white",
							  marginBottom:"5px",
							  fontSize:"11px"}}><AiOutlineCheck /> Happy Customer</p>

							  <button className="bg-warning button-price"><NavLink exact to="/pricing/pricecontact">PURCHASE</NavLink></button>

						   </div>
					  </div>
				</div>
			</div>
		</div>	
	
		</>
	)
}

export default Price
