import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Equipmentcard from './Equipmentcard.jsx';
import Equcarddata from './Equcarddata.jsx';
import Header from './Header';
import Homedivcontent from './Homedivcontent';
import Dreamdiv from './Dreamdiv';
import Trainingpro from './Trainingpro.jsx';
import Iconescard from './Iconescard.jsx';
import Iconescarddata from './Iconescarddata.jsx';
import Footer from './Footer';


const Home = () => {
	return (
		<>
		
		
		<div className="container-fluid">
		    <div className="row">
			   <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
			       <div className="body-image">
				       <Header />
				       <Homedivcontent />
				      </div>
				   </div>
			   </div>
		    </div>

			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 d-flex flex-row ">

					<p style={{color:"white",}}>
				    <Equipmentcard
			        image={Equcarddata[0].imagesrc}
					icon={Equcarddata[0].eicon}
					heading={Equcarddata[0].head}
					paragraph={Equcarddata[0].paradata}

					 />
					 </p>

					 <p style={{color:"yellow"}}>
		             <Equipmentcard
			        image={Equcarddata[1].imagesrc}
					icon={Equcarddata[1].eicon}
					heading={Equcarddata[1].head}
					paragraph={Equcarddata[1].paradata}
					/>
					</p>

					<p style={{color:"white"}}>
		            <Equipmentcard
			        image={Equcarddata[2].imagesrc}
					icon={Equcarddata[2].eicon}
					heading={Equcarddata[2].head}
					paragraph={Equcarddata[2].paradata}
					/>
					</p>


					</div>
				</div>
			</div>
			<Dreamdiv />
			<Trainingpro />
	
			<div className="container-fluid mt-4">
			  <h4 className="text-center">WHY <span className="text-warning">CHOOSE US</span> </h4>
				<div className="row pt-2 ">
					<div className="col-lg-12 col-md-12 col-sm-12 d-flex flex-row ">

					<p style={{color:"black",}}>
				    <Iconescard
			        image={Iconescarddata[0].imageicon}
					headcontent={Iconescarddata[0].heading}
					paragraph={Iconescarddata[0].paradata}
					 />
					 </p>
					 <p style={{color:"black",}}>
				    <Iconescard
			        image={Iconescarddata[1].imageicon}
					headcontent={Iconescarddata[1].heading}
					paragraph={Iconescarddata[1].paradata}
					 />
					 </p><p style={{color:"black",}}>
				    <Iconescard
			        image={Iconescarddata[2].imageicon}
					headcontent={Iconescarddata[2].heading}
					paragraph={Iconescarddata[2].paradata}
					 />
					 </p>
					</div>
				</div>
			</div>	   
			<Footer />
		</>
	)
}

export default Home;
