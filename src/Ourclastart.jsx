import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Ourclastart = (props) => {
	return (
		<>
		<div className="container-fluid">
		   <div className="row">
			    <div className="col-lg-12 col-md-12 col-sm-12">
				    <div>
						<div className="card ourclasscard-div" style={{backgroundImage:`url(${props.image})`,
							          backgroundRepeat:"no-repeat",
							          backgroundSize: "cover"}}>
							 <div className="card-body">
							 <div className="ourclasscard-div1">
								 <p className="ourclasspara">{props.paragraph}</p>
							 </div>
							 
							 
							 </div>
						</div>
					</div>	 
				</div>
		   </div>
		</div>
			
		</>
	)
}

export default Ourclastart
