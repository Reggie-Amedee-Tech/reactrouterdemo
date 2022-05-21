import { Routes, Route, useParams } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Product from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import User from './components/User';
import UserDetail from './components/UserDetails';
import Admin from './components/Admin';
import React, {useState} from "react";

import './App.css';

function App() {

  const [specificUser, setSpecificUser] = useState({})
  

    
    const filterUserId = (id) => {
        const newItem = user.filter((item) => {
            return item.id === id
        })
        setSpecificUser(newItem)
        
        
        
    }
  

  

    const user = [{
        name: 'Starscourge Radahn',
        email: 'redlion@caelid.com',
        userName: 'LeanordChampion',
        id: Math.floor(Math.random() * 1000000)
    },
     {
        name: 'Godrick the Grafted',
        email: 'stormveilking@limgrave.com',
        userName: 'Godfreys Fave',
        id: Math.floor(Math.random() * 1000000)
    }, {
        name: 'Malenia the severed',
        email: 'oneArmValkyrie@haligtree.net',
        userName: 'Blade of Miquella',
        id: Math.floor(Math.random() * 1000000)
    }, {
        name: 'Queen Renalla',
        email: 'iheartradagon@rayalucaria.net',
        userName: 'Ranni Mom',
        id: Math.floor(Math.random() * 1000000)
    }]



  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
        <Route path="products" element={<Product />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<User user={user} filterUserId={filterUserId}/>}>
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="users/:userId" element={<UserDetail specificUser={specificUser} />} />
      </Routes>
    </>
  );
}

export default App;
