import React from "react";
import { Link, Outlet } from "react-router-dom";



const Product = () => {

    return (
        <>
        
        <div className="user-detail">
        <div>
            <input type="search" placeholder="search product"/>
        </div>
        <nav>
            <Link to="featured">Featured</Link>
            <Link to="new">New</Link>
        </nav>
        <Outlet />
        </div>
        </>
    )
}

export default Product;