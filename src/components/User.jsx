import React from "react";
import { Avatar } from "@mui/material";
import { useDispatch , useSelector } from "react-redux";
import { setChatId , setUser, toggleShowMessage } from "../Features/appFeatures";
import Theme from "../Helper/Mode";

// {
//     `flex p-1 rounded-md
//     ${selected!==chatId ? (mode ? `hover:bg-[${Theme.dark.hover}]` : `hover:bg-${Theme.light.hover}`) : ''}
//     ${selected === chatId ? (mode ? `bg-[${Theme.dark.main}] text-white`: `bg-[${Theme.light.main}] text-black`): `` }
// `}

const User = (props)=>{

    let dispatch = useDispatch();
    let selected = useSelector((state)=>state.app.chatId);
    let mode = useSelector((state)=>state.app.darkMode);

    let {
        id,
        name,
        phone,
        email,
    } = props.User;

    let chatId = props.Chat;

    const handleChatChange = ()=>{
        dispatch(setChatId(chatId));
        dispatch(setUser(id));
        dispatch(toggleShowMessage(true));
    }

    const getRandom = ()=>{
        return Math.floor(Math.random() * 10)+1;
    }
    //  
    return(
        <main className={`mt-1 p-1 cursor-pointer`} onClick={handleChatChange} >
            <div 
                style={
                    !selected ? (
                        mode ? {color: Theme.dark.text} : { color: Theme.light.text }
                    ):{  }
                }
                className={
                    `flex p-1 rounded-md
                     ${selected === chatId ?  (mode ? `bg-[${Theme.dark.main}]` : `bg-[${Theme.light.main}]`) : (mode ? `hover:bg-[${Theme.dark.hover}]`:`hover:bg-[${Theme.light.hover}]`) }
                `}
            >
                <div className="mr-2">
                    <Avatar
                        src=''
                        sx={{width:60,height:60}} 
                    />
                </div>
                <div className="w-[75%] p-1">
                    <div className="flex justify-between">
                        <h1>{name || 'John Doe'}</h1>
                        <p>10:30 PM</p>
                    </div>
                    <p className="mt-2">Hi there I am using whatsapp</p>
                </div>
            </div>
        </main>
    )
};

export default React.memo(User);