import React, {useState} from "react";

import { Link, useSearchParams } from 'react-router-dom'

const Users = (props) => {
    const {user, filterUserId, } = props;
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active'
    

    
  
    

    return (
        <>



            <div className="user-detail">
                {user.map((item) => {
                    return <div key={item.id}>
                    <Link to={`${item.id}`} onClick={() => filterUserId(item.id)}>{item.name}</Link>
                    </div>
                })}
                
                
            </div>
            <div>
                <button onClick={() => setSearchParams({filter: "active"})}>Active Users</button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button>
            </div>
            {
                showActiveUsers ? <h2>Showing active users</h2> : <h2>Showing all users</h2>
            }
            
        </>
    )
}

export default Users;