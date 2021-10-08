import React from 'react'
import Header from './Header.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer.jsx';
import Price from './Price.jsx';
import Pricrcardata from './Pricrcardata.jsx';



const Pricing = () => {
	return (
		<>
		<div className="container-fluid">
		   <div className="row">
			    <div className="col-lg-12 col-md-12 col-sm-12">
					<div className="body-image">
					<Header />
					<h1 className="text-warning text-center mt-5">Price Gym</h1>

					</div>
				</div>
		   </div>
		  
		</div>



		<div className="mt-4 d-flex">
		<Price
		  image={Pricrcardata[0].imageprice}
		  paragraph={Pricrcardata[0].paradata}
		  rs={Pricrcardata[0].rupees} />
		<Price 
		  image={Pricrcardata[1].imageprice}
		  paragraph={Pricrcardata[1].paradata}
		  rs={Pricrcardata[1].rupees} />
		<Price 
		  image={Pricrcardata[2].imageprice}
		  paragraph={Pricrcardata[2].paradata}
		  rs={Pricrcardata[2].rupees} />

 


		</div>
		<div className="mt-4">
		<Footer/>
		</div>
			
		</>
	)
}

export default Pricing;
