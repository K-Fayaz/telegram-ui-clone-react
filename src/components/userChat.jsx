import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { MESSAGE_API } from "../Helper/Endpoints";
import { handleAsync } from "../Helper/handleAsync";
import { setMessages } from "../Features/appFeatures";
import UserHeader from "./UserHeader";
import Messages from "./Messages";
import { TextField } from "@mui/material";
import Theme from "../Helper/Mode";
import "../scrollbar.css";
import MessageField from "./MessageField";

const UserChat = ()=>{

    let dispatch = useDispatch();
    const chatId = useSelector((state)=>state.app.chatId);
    const [chat,setChat] = useState([]);
    const messages = JSON.parse(useSelector((state)=>state.app.messages));
    let mode = useSelector((state)=>state.app.darkMode);

    let showMessage = useSelector((state)=>state.app.showMessage);
    let compactMode = useSelector((state)=>state.app.compactMode);

    let BGTheme = {
        dark: require('../Assets/BG-2.jpg'),
        light: require("../Assets/light-bg-2.jpg"),
    };

    useEffect(()=>{
        if(chatId === null) return;

        let url = `${MESSAGE_API}${chatId}`;
        console.log(url)

        handleAsync(url)
            .then((response)=>{
                console.log(response);
                if(response.status_code === 200){
                    setChat(response.data);
                }   
            })
            .catch((err)=>console.log(err));

    },[chatId]); 


    useEffect(()=>{
        console.log("This will trigger Parsing of Messages based on Date");

        let payload = Object.create({});

        payload = chat.reduce((messageGroup,message)=>{
            let date =  new Date(message?.updated_at || '').toString().slice(0,15);
            if(!messageGroup[date]) messageGroup[date] = [];
            messageGroup[date].push(message);
            return messageGroup;
        },payload);

        dispatch(setMessages(JSON.stringify(payload)));
        console.log("Parsed Messages are here: ",payload);

    },[chat]);

    return(
        <main 
            style={{
                backgroundImage: `url(${mode ? BGTheme.dark : BGTheme.light})` // Using `require` to resolve path
            }}
            className={`xl:w-3/4 lg:w-2/3 h-full ${compactMode && showMessage ? 'w-full':''}`}>

            {chatId && <UserHeader/>}
            <div className="w-4/5 h-[92vh] mx-auto h-full border-0">
                <div style={{overflow:'hidden'}} className="w-full relative">
                    {
                        chatId !== null && <Messages/>
                    }
                    {
                       chatId !== null && <MessageField/>

                    }
                </div>
            </div>

        </main>
    )
};

export default React.memo(UserChat);
