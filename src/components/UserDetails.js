import React from "react";
import { useParams, useNavigate } from "react-router-dom";


const UserDetail = (props) => {

    const navigate = useNavigate();
    const {specificUser} = props;
    const { userId } = useParams();


    

    


    return <>
    <div className="user-detail">

    
    {specificUser.map((item) => {
        
        return <div>
            <p>{item.userName}</p>
            <p>{item.name}</p>
            <p>{item.email}</p>
        </div>
        
    })}
    <button onClick={() => {navigate(-1)}}>Go Back</button>
    
    </div>
    </>
}

export default UserDetail