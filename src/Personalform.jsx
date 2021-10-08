import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaDotCircle} from "react-icons/fa";
import './Personelform.css';


const Personelform =()=>{
	return(

		<>
       <div className="container-fluid mt-3">

		    <div className="d-flex justify-content-around align-items-center">
              <FaDotCircle /><hr style={{width:"30%",height:"3px",color:"black"}}/>
			  <FaDotCircle/> <hr style={{width:"30%",height:"3px",color:"black" }}/>
			  <FaDotCircle /> <hr  style={{width:"30%",height:"3px",color:"black"}}/>
			</div>
	   </div>

	   <div className="container-fluid">
            <div className="d-flex justify-content-around">
                 <p style={{fontSize:"13px",fontFamily:"monospace"}}>Personel details</p>
                 <p style={{fontSize:"13px",fontFamily:"monospace"}}>Bank Payment</p>
                 <p style={{fontSize:"13px",fontFamily:"monospace"}}>Membership credited</p>
           </div>
       </div>




		<div className="container-fluid">
		<h5 className="text-center">Personel detail</h5>
			 <div className="row">
				  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                       <div className="d-flex">
					           <form>
								    <input type="text" placeholder="First Name" className="input-feildfirst" autoComplete="off" required />
								    <input type="text" placeholder="Last Name" className="input-feildsecond" autoComplete="off" required/>
								    <input type="number" placeholder="Mobile nmber" className="input-feildthird" autoComplete="off" required />
								    <input type="email" placeholder="abc@gmail.com" className="input-feildfourth" autoComplete="off" required />
								    <input type="date" placeholder="abc@gmail.com" className="input-feildfive" autoComplete="off" required />
									<select className="genderfield">
									<option>Gender</option>
										 <option value="1">Male</option>
										 <option value="2">Female</option>
										 <option value="3">other</option>
									</select>


									<input type="text" placeholder="Address" className="input-feildsix" autoComplete="off" required/>
								    <input type="text" placeholder="Country/Region" className="input-feildseven" autoComplete="off" required />
								    <input type="number" placeholder="Pin Code" className="input-feildeight" autoComplete="off" required />
								    <input type="text" placeholder="City" className="input-feildnine" autoComplete="off" required />
									<button className="btn  btn-danger"
					      style={{marginTop:"20px",
						  marginLeft:"45%"}}>Submit</button>

							   </form>
					   </div>
				  </div>
			 </div>
		</div>
		</>
	)

}
export default Personelform;