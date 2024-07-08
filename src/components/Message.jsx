import React from "react";
import { useSelector } from "react-redux";
import Theme from "../Helper/Mode";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Message = (props)=>{

    let user = useSelector((state)=>state.app.user);
    let mode = useSelector((state)=>state.app.darkMode);

    let {
        message,
        sender_id,
        updated_at
    } = props.Data;

    const styles = {
        left:"clear-both w-auto text-sm bg-[#1d1d1e] float-left p-3 overflow-hidden my-2 ml-2 max-w-[400px] text-white rounded-ss rounded-e",
        right: "clear-both bg-[#8775d9] float-right mr-2 w-auto text-sm overflow-hidden p-3 my-2 ml-2 max-w-[400px] rounded-s rounded-es px-5"
    }
    

    return(
        <div 
            className={user == sender_id ? styles.right : styles.left}
            // className="bg-red-400"
            style={
                user == sender_id ? ( mode ? { backgroundColor: Theme.dark.right,color: Theme.dark.message } : { backgroundColor:Theme.light.right ,color: Theme.light.message } ) 
                                  : ( mode ? { backgroundColor: Theme.dark.left,color: Theme.dark.message } : { backgroundColor:Theme.light.left , color: Theme.light.message })
            }
        >
            <h1>{message}</h1>
        </div>
    )
};

export default React.memo(Message);