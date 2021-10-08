import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FaGithub,FaInstagram,
        FaTwitter,FaFacebook,
	     FaWhatsapp} from 'react-icons/fa';



const Footer = () => {
	return (
		<div className="container-fluid">
		   <div className="row">
			   <div className="col-lg-12 col-md-12 col-sm-12">
				    <div className="footer-div pt-3 text-white d-flex flex-row justify-content-around">
					    <div>
						<h3 className="text-white">POWER <span className="text-warning">X</span></h3>
						</div>
						<div>
							<p className="para-footer">Need Help?</p>
							<div className="parasub-footer">
							   Help Center
							    <br />
						      Email Support
					        	<br />
						      Live Chat
						        <br />
						   Gift Cerstificate
					         	<br />
					    	Send Us Feedback
							</div>
						</div>
						<div>
							<p className="para-footer">Digital Resources</p>
							<div className="parasub-footer">
							   Articles
							    <br />
						      E-book
							</div>

						</div>
						<div>
							<p className="para-footer">Contact With Us</p>
							<div className="justify-content-around d-flex">
								<FaGithub />
								<FaInstagram />
								<FaTwitter />
								<FaFacebook />
								<FaWhatsapp />
							</div>
						</div>
						<div className="" style={{width:"150px"}}>
							<p className="para-footer">Join Our Newsletter</p>
							<div className="parasub-footer">
							   this is the updates for the gym session and 
							   the trainer for the data and the traini for the 
							   gym
							</div>
				

						</div>
					</div>
				
			   </div>
                      

		   </div>
		</div>
	)
}

export default Footer
