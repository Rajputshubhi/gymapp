import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FaSearchLocation,FaPhone,FaEnvelope} from 'react-icons/fa'


const Contactform = () => {
	return (
		<>
         <div className="container-fluid">
			  <div className="row">
				   <div className="col-lg-12 col-md-12 col-sm-12">
					    <div className="d-flex">
							 <div class="contact-image">
							 <div>


							 </div>
							 <div className="address-image">
								 <p style={{fontSize:"16px",marginLeft:"15px"}}><FaSearchLocation />  Address</p>
								 <p  style={{fontSize:"11px",
								  wordSpacing:"-1px",
								  fontFamily:"monospace",marginLeft:"45px"}}>Thana Bhawan Shamli 379 Delhi 
								  India , 247777 IN </p>
							 </div>

							 <div className="letstalk-image">
								 <p  style={{fontSize:"16px",
								 paddingTop:"6px",marginLeft:"15px"}}><FaPhone /> Lets talk</p>
								 <p className="text-danger" style={{fontSize:"11px",marginLeft:"40px"}}>7088813975</p>
							 </div>

							 <div className="generalsupport-image">
								 <p  style={{fontSize:"16px",marginLeft:"15px"}}><FaEnvelope /> General Support</p>
								 <p className="text-danger"  style={{fontSize:"11px",marginLeft:"40px"}}>powerXGym@gmail.com</p>
							 </div>
					
							 </div>
							 <div className="contact-div">
							 <h1 className="text-center text-info mt-2">CONTACT US</h1>
							 <div className="form-div">
                             <form>
							 <input type="text" placeholder="First name"  autocomplete="off" required />
							 <input type="text" placeholder="Last name" autocomplete="off" required className=""/>
							 <input type="text" placeholder="Contact number" autocomplete="off" required className=""/>
							 <input type="text" placeholder="Email" autocomplete="off" required className=""/>
							 <input type="text" placeholder="Address" autocomplete="off" required className="address"/>
							 <input type="text" placeholder="Write us a message" autocomplete="off" required className="message"/>
                             <input type="radio" name="male" value="y" /><label className="text-white">Male</label>
                             <input type="radio" name="female" value="n" /><label className="text-white" >Female</label>
							 <br />
							 <button className="btn btn-info btns">submit</button>
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

export default Contactform
