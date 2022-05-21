import React from "react";
import { useParams, useNavigate } from "react-router-dom";


const UserDetail = (props) => {

    const navigate = useNavigate();
    const { specificUser, userFilled } = props;
    const { userId } = useParams();







    return <>
        <div className="user-detail">
            {!userFilled ?
                <>
                    <p>User Not Found</p>
                    <button onClick={() => { navigate(-1) }}> Go Back</button>
                </>
                :
                specificUser.map((item) => {

                    return <>

                        <div>
                            <p>User Name: {item.userName}</p>
                            <p>Name: {item.name}</p>
                            <p>Email: {item.email}</p>
                        </div>
                        <button onClick={() => { navigate(-1) }}> Go Back</button>
                    </>
                })
            }
        </div>
    </>
}

export default UserDetail

