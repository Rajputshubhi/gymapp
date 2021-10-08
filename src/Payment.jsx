import React from 'react'
import Header from './Header';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {AiOutlineCheck} from 'react-icons/ai'
import { FaDotCircle } from 'react-icons/fa';
import Creditcard from './Creditcard.jsx';
import Debitcard from './Debitcard';



const Payment = () => {
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
            <div className="d-flex justify-content-around align-items-center">
                 <AiOutlineCheck className="text-danger" /><hr style={{width:"30%",height:"3px",color:""}}/>
                <FaDotCircle />  <hr style={{width:"30%",height:"3px",color:"black" }}/>
				<FaDotCircle/> <hr  style={{width:"30%",height:"3px",color:"black"}}/>
           </div>
       </div>
	   <div className="container-fluid">
            <div className="d-flex justify-content-around align-items-center">
			<p style={{fontSize:"13px",fontFamily:"monospace",color:"red"}}>Personel details</p>
                 <p style={{fontSize:"13px",fontFamily:"monospace"}}>Bank Payment</p>
                 <p style={{fontSize:"13px",fontFamily:"monospace"}}>Membership credited</p>
           </div>
       </div>



	   <div className="mt-4">
		   <Creditcard />
	   </div>

	   <div className="mt-4">
		   <Debitcard />
	   </div>










		<div className="container-fluid mt-3">
			 <Footer />
		</div>
		</>
	)
}

export default Payment;
