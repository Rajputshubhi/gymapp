import React from 'react'
// import Mainpage from './Mainpage';
import {Route ,Switch} from 'react-router-dom';
import Home from './Home.jsx';
import Ourclass from './Ourclass.jsx';
import Service from './Service.jsx';
import Aboutus from './Aboutus.jsx';
import Quotes from './Quotes.jsx';
import Pricing from './Pricing.jsx';
import Contact from './Contact.jsx';
import Pricecontactform from './Pricecontactform.jsx';
import Payment from './Payment.jsx';




const App = () => {
    return (
        <div>
            {/* <Mainpage /> */}
            <Switch>
                 <Route exact path="/" component={Home}/>
                 <Route exact path="/service" component={Service}/>
                 <Route exact path="/ourclass" component={Ourclass}/>
                 <Route exact path="/aboutus" component={Aboutus}/>
                 <Route exact path="/quotes" component={Quotes}/>
                 <Route exact path="/pricing" component={Pricing}/>
                 <Route exact path="/contact" component={Contact}/>
                 <Route exact path="/pricing/pricecontact" component={Pricecontactform}/>
                 <Route path="/pricing/pricecontact/payment" component={Payment} />
            </Switch>
        </div>
    )
}

export default App
