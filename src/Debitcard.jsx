import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Creditcard.css';
import {FaCcMastercard, FaCcVisa} from 'react-icons/fa';
import {SiAmericanexpress} from 'react-icons/si';
import './Creditcard.css'


const Debitcard = () => {
	return (
		<>
		  <div className="container">
			    <div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12">
					<div>
						<div className="card credit-card">
							<div className="card-body">
                             <div className="d-flex flex-row align-items-center">
							 <div>
							 <input type="radio" name="male" value="y"/><label style={{fontSize:"18px",marginLeft:"10px",paddingTop:"25px"}}>DEBIT CARD</label>
							</div>
	                        <div style={{marginLeft:"400px"}} > <FaCcVisa style={{width:"30px",height:"50px"}}/> <FaCcMastercard style={{width:"30px",height:"50px"}} /> <SiAmericanexpress style={{width:"30px",height:"45px"}} /></div>
							 </div>
                           <p style={{fontSize:"11px",marginLeft:"25px",wordSpacing:"-2px"}}>Safe money transfer using your bank account Visa,Maestro,Discover,American Express</p>
							<form>
							<p style={{marginBottom:"3px",fontFamily:"monospace"}}>CARD NUMBER</p>	 
							<input type="text" className="card-number" placeholder="1234 1234 1234 1234" autoComplete="off" required style={{border:"1px solid black"}} />
							<p style={{fontSize:"11px",wordSpacing:"-2px"}}>We'll never share youfr card info</p>
						      	<div className="d-flex flex-row justify-content-around">
								  <div>
                                  <p style={{marginBottom:"2px",fontFamily:"monospace"}}>NAME ON CARD</p>
								  <input type="text" placeholder="Your name" autoComplete="off" required className="card-name" />
								  </div>

								  <div>
                                  <p style={{marginBottom:"2px",fontFamily:"monospace"}}>EXPIRE DATE</p>
								  <input type="date" autoComplete="off" required className="card-date"/>
								  </div>

								  <div>
                                  <p style={{marginBottom:"2px",fontFamily:"monospace"}}>CVV</p>
								  <input type="text" className="card-cvv" autoComplete="off" required placeholder="CVV"/>
								  </div>
							   </div>
							   <button style={{marginTop:"10px",width:"60px",background:"orange",border:"none",borderRadius:"2px "}}>PAY</button>
							   </form>
							</div>
						</div>
						</div>
					</div>
				</div>
		  </div>	
		</>
	)
}

export default Debitcard
