import React from 'react'
import Header from './Header.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer.jsx';


const Service = () => {
	return (
		<>
		<div className="container-fluid">
		   <div className="row">
			    <div className="col-lg-12 col-md-12 col-sm-12">
					<div className="body-image">
					<Header />
					<h1 className="text-warning text-center mt-5">Service</h1>

					</div>
				</div>
		   </div>
		  
		</div>
		<div className="mt-4">
		<Footer/>
		</div>
			
		</>
	)
}

export default Service
