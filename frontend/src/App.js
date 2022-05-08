import React from "react";
import Layout from "./hocs/Layout.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/Home.js';
import Contact from './containers/Contact.js';
import Listings from './containers/Listings.js';
import ListingDetail from './containers/ListingDetails.js';
import SignIn from './containers/SignIn.js';
import SignUp from './containers/SignUp.js';
import NotFound from './components/NotFound';


const App = () => {
  <Router>
    <Layout>
      <Routes>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/listings' component={Listings} />
          <Route exact path='/listings/:id' component={ListingDetail} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route component={NotFound} />
      </Routes>
    </Layout>
  </Router>
    

};

export default App;
