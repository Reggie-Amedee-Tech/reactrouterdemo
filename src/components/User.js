import React, {useState} from "react";

import { Outlet, Link } from 'react-router-dom'

const Users = (props) => {
    const {user, filterUserId, } = props;
    

    
  
    

    return (
        <>



            <div className="user-detail">
                {user.map((item) => {
                    return <div key={item.id}>
                    <Link to={`${item.id}`} onClick={() => filterUserId(item.id)}>{item.name}</Link>
                    </div>
                })}
                
                
            </div>
            
        </>
    )
}

export default Users;