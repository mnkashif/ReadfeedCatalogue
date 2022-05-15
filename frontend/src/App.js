import React from "react";
import Layout from "./hocs/Layout.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/Home.js';
import Contact from './containers/Contact.js';
import Listings from './containers/Listings.js';
import ListingDetail from './containers/ListingDetails.js';
import Login from './containers/Login.js';
import SignUp from './containers/SignUp.js';
import NotFound from './components/NotFound';
import PrivateRoute from './components/privateRoute';


import "./sass/main.scss";

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
    <Router>
        <Layout>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/book_listings' element={<Listings/>} />
                <Route path='/book_listings/:id' element={<PrivateRoute><ListingDetail /></PrivateRoute>}/>
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/*' element={<NotFound/>} /> 
            </Routes>
        </Layout>
    </Router>
   </Provider>
  );

    

};

export default App;
