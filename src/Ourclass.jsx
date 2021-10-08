import React from 'react'
import Header from './Header.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer.jsx';
import Ourclastart from './Ourclastart.jsx';
import Ourclassdata from './Ourclassdata.jsx';


const Ourclass = () => {
	return (
		<>
		<div className="container-fluid">
		   <div className="row">
			    <div className="col-lg-12 col-md-12 col-sm-12">
					<div className="body-image">
					<Header />
					<h1 className="text-warning text-center mt-5">OUR CLASS</h1>

					</div>
				</div>
		   </div>
		  
		</div>


		<div className="mt-4 d-flex">
		<Ourclastart
			image={Ourclassdata[0].images}
			paragraph={Ourclassdata[0].paradata}
		/>
		<Ourclastart
			image={Ourclassdata[1].images}
			paragraph={Ourclassdata[1].paradata}

		/>
		<Ourclastart
			image={Ourclassdata[2].images}
			paragraph={Ourclassdata[2].paradata}

		/>
		</div>

		<div className="mt-5 d-flex">
		<Ourclastart 
			image={Ourclassdata[3].images}
			paragraph={Ourclassdata[3].paradata}

		 />
		<Ourclastart 
			image={Ourclassdata[4].images}
			paragraph={Ourclassdata[4].paradata}

		/>
		<Ourclastart 
			image={Ourclassdata[5].images}
			paragraph={Ourclassdata[5].paradata}


		/>
		</div>
		
		<div className="mt-5">
		<Footer/>
		</div>
		
		</>
	)
}

export default Ourclass;