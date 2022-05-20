import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

    return <>
        <h1>HOME PAGE</h1>
        <button onClick={() => {navigate('order-summary') /* If we want to replace the history in the stack, pass in the second argument {replace: true} */}}>Place Order</button>
    </>
}

export default Home