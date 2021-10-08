import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';



const Header = () => {
	return (
		<>
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 col-12">

				<div className="d-flex flex-row text-white justify-content-around pt-4">
				   <h2 className="text-white head">POWER <span className="text-warning">X</span></h2>
                             
					          <NavLink exact to="/" className="home-link">Home</NavLink>
					          <NavLink  to="/service" className="home-link">Service</NavLink>
					          <NavLink  to="/ourclass" className="home-link">Our Class</NavLink>
					          <NavLink  to="/aboutus" className="home-link">AboutUS</NavLink> 
					          <NavLink  to="/quotes" className="home-link">Quotes</NavLink> 
					          <NavLink  to="/pricing" className="home-link">Pricing</NavLink>
					          <NavLink  to="/contact" className="home-link">Contact Us</NavLink> 

					          
			  </div>

				</div>
			</div>
		</div>


		  
				  
		</>
	)
}

export default Header
