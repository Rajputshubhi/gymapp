import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaArrowAltCircleRight } from 'react-icons/fa';



const Trainingpro = () => {
	return (
		<>
	   <div className="container-fluid mt-3">
		    <div className="row">
			      <h3 className="text-center font-monospace">TRAINING <span className="text-warning">PROGRAMS</span></h3>
				<div className="col-lg-12 col-md-12 colsm-12 col-12 d-flex flex-row">
					 <div className="bg-dark training-div1">
                              <div className="yoga-session">
							      <h6>YOGA TRAINING SESSION <FaArrowAltCircleRight /></h6>
						     </div>	 
					 </div>
					 <div className="bg-primary training-div2">
					          <div className="cardio-session">
							      <h6>CARDIO TRAINING SESSION <FaArrowAltCircleRight /></h6>
						      </div>
					 </div>
				</div>
			</div>
	   </div>
		</>
	)
}
export default Trainingpro;