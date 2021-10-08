import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Equipmentcard = (props) => {
	return (
		<>
        <div className="container-fluid">
		    <div>
		        <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
				        <div className="card mt-3 card-div " style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${props.image})`,
						              width:'225px',
							          backgroundRepeat:"no-repeat",
							          backgroundSize: "cover"}}>
				            <div className="card-body ">
					          <img src={props.icon} style={{width:"40px",
	
							             height:"40px",
										 marginLeft:"70px",
							          backgroundRepeat:"no-repeat",
							          backgroundSize: "cover"}} />
									  <h4 style={{letterSpacing:"-1px",
									  textAlign:"center",
									  fontSize:"1.6rem"}}>{props.heading}</h4>
						         <p style={{wordSpacing:"-3px",
								 fontSize:"10px",textAlign:"center"}}>{props.paragraph}</p>
					       </div>
				        </div> 
			        </div>
		        </div>
		    </div>   
	    </div>
		</>
	)
}

export default Equipmentcard;
