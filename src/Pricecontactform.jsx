import React from 'react'
// import Contactform from './Contactform'
import Header from './Header';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nextbutton from './Nextbutton.jsx';
import Personelform from './Personalform';
// import Payment from './Payment.jsx';


const Pricecontactform = () => {
	return (
		<>

<div className="container-fluid">
		   <div className="row">
			    <div className="col-lg-12 col-md-12 col-sm-12">
					<div className="body-image">
					<Header />
					</div>
				</div>
		   </div>
		  
		</div>


		<div className="container-fluid mt-3">
			 <Personelform />
		</div>

		<div className="container-fluid mt-2">
		   <Nextbutton />
		</div>

		<div className="container-fluid mt-3">
			 <Footer />
		</div>
		</>
	)
}

export default Pricecontactform
