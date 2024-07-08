import React from "react";
import User from "./User";
import { useEffect, useState } from "react";
import { CHAT_API } from "../Helper/Endpoints";
import { handleAsync } from "../Helper/handleAsync";
// import "../customScroll.css";
import "../scrollbar.css"
import { useSelector } from "react-redux";

const AllUsers = ()=>{

    const [page,setPage] = useState(1);
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        let url = `${CHAT_API}${page}`;

        handleAsync(url)
            .then(response=>{
                console.log(response);
                if(response.status_code === 200){
                    setUsers(response.data.data);
                    console.log("Array is:",response.data.data);
                }
            })
            .catch(err=>console.log(err));
    },[]);

    return(
        <main style={{height:'83vh',overflow:'hidden'}}>
            <div className="h-full hide-scrollbar" style={{overflowY:'auto'}}>
                {
                    users.map((item,index)=>(
                        <User key={index} User={item?.creator} Chat={item?.id} />
                    ))
                }
            </div>
        </main>
    )
};

export default React.memo(AllUsers);