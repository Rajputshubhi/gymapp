import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Iconescard = (props) => {
	return (
		<>
		 <div className="container-fluid">
		   
			  <div className="row">
				  <div className="col-lg-12 col-md-12 col-sm-12">
					  <div className="card iconcard-div">
						   <div className="card-body">
						        <img src={props.image} style={{width:"50px",
							            backgroundColor:"white",
							             height:"50px",
				
							          backgroundRepeat:"no-repeat",
							          backgroundSize: "cover"}} />
							   <p style={{fontSize:"15px",
							   wordSpacing:"-5px"}}><b>{props.headcontent}</b></p>
							   <p style={{wordSpacing:"-3px",
							               fontSize:"11px"}}>{props.paragraph}</p>
						   </div>
					  </div>
				  </div>
			  </div>
		 </div>
			
		</>
	)
}

export default Iconescard
