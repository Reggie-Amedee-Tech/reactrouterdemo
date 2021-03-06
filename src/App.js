import { Routes, Route} from 'react-router-dom'
import { AuthProvider } from './components/Auth';
import { RequireAuth } from './components/RequireAuth';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
// import About from './components/About';
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
const LazyAbout = React.lazy(() => import('./components/About'))



function App() {

  const [specificUser, setSpecificUser] = useState({})
  const [userFilled, setUserFilled] = useState(false)
  

    
    const filterUserId = (id) => {
        const newItem = user.filter((item) => {
            return item.id === id
        })
        setUserFilled(true)
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
    },
  {
    name: "King Radagon",
    email: 'goldenorderboy@leyndell.com',
    userName: 'red hair Rada',
    id: Math.floor(Math.random() * 1000000)
  },
{
  name: 'Mohg, Lord of Blood',
  email: 'miquellafosterdad@bloodpalace.com',
  userName: 'you have nihil chance!',
  id: Math.floor(Math.random() * 1000000)
}]



  return (
    
    <>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<React.Suspense fallback="...loading">
          <LazyAbout />
        </React.Suspense>}></Route>
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
        <Route path="profile" element={<RequireAuth>
          <Profile />
          </RequireAuth>}/>
        <Route path="login" element={<Login />}/>
        <Route path="users/:userId" element={<UserDetail specificUser={specificUser} userFilled={userFilled}/>} />
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
