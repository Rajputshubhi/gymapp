import React from 'react'
import Header from './Header.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer.jsx';
import {FaCalendar} from 'react-icons/fa';
import {FaWhatsapp,FaInstagram,FaFacebook} from 'react-icons/fa';

import Quotesapi from './Quotesapi.jsx';
const Quotes = () => {
	return (
		<>
		<div className="container-fluid">
		   <div className="row">
			    <div className="col-lg-12 col-md-12 col-sm-12">
					<div className="body-image">
					<Header />
					<h1 className="text-warning text-center mt-5">Motivation for Gym</h1>
					</div>
				</div>
		   </div>
		</div>
         <div className="container-fluid mt-3">
		   <hr/>
		    <h2 className="text-center">20 FITNESS MOTIVATION QUOTES</h2>
			  <p className="text-center"><FaCalendar /> August 2021</p>
			  <div className="row">
				   <div className="col-lg-12 col-md-12 col-sm-12 col-12">
					    <div>
							<img src="https://www.verywellmind.com/thmb/ax-UnLPRAj09kJM4M6vrSTWjLyw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-591406431-588a77183df78caebc334e1d.jpg" alt="images" className="aboutimage"/>
						</div>
				   </div>
			  </div>
		 </div>
	<div className="container mt-4 bg-info">
		<div className="row">
			 <div className="col-lg-12 col-md-12 col-sm-12 col-12">
				  <div>
                        <p>
					    20 motivational quotes to inspire greatness in the gym.</p>
					    <p>Lacking motivation to get back into the gym? Back in the gym already but feel stagnated? Or maybe you’re just looking for new inspiration for a the new year. Whatever your situation, reading words of wisdom from successful people can be super-inspiring.
					    With that in mind, here are  20 amazing  motivational quotes from notable figures to help you kick start your new year — and your fitness goals
                        Some are from sports people, some entrepreneurs, world leaders and famous thinkers, but in each of these quotes is something to inspire you in your fitness pursuits.</p>
                    <div>
						 {
							 Quotesapi.map(currEle=>{
								 const{id,quote,writer}=currEle;
								 return(
									 <>
									 <p style={{fontSize:"15px"}}>{id}. {quote}</p>
									 <p>{writer}</p>
									 </>
								 )
							 })
						 } 
					</div>
				  </div>
			 </div>
		</div>
	</div>

	<div className="container-fluid mt-4">
	  <div className="row">
		   <div className="col-lg-12 col-md-12 col-sm-12">
			    <div className="d-flex  justify-content-center p-5 bg-info">
			        <div className="quotesimg"> </div>
					<div className="text-white"> 
					<p style={{fontSize:"16px",marginLeft:"12px"}}>Shubham Rana</p>
					<p className="text-center" style={{fontSize:"15px"}}><FaWhatsapp /> <FaInstagram /> <FaFacebook /></p>
					</div>
					
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
export default Quotes;
