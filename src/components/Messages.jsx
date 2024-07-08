import React from "react";
import { useSelector } from "react-redux"
import Message from "./Message";
import Theme from "../Helper/Mode";
import { useState } from "react";

import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';

const Messages = ()=>{

    const [height,setHeight] = useState(window.innerHeight);
    const messages = JSON.parse(useSelector((state)=>state.app.messages));
    const mode = useSelector((state)=>state.app.darkMode);

    return(
        <div style={{overflowY:'auto',height:`${height-110}px`}} className="hide-scrollbar">
            {
                Object.keys(messages).map((date,index)=>(
                    <div key={index}>
                        <div className="clear-both">
                            <h1 
                                className="w-[150px] text-white mx-auto text-center px-2 py-2 rounded-full shadow-md mt-3 bg-black "
                                style={
                                    mode ? { backgroundColor: Theme.dark.date } : { backgroundColor: Theme.light.date }
                                }
                            >{date}</h1>
                        </div>
                        {
                            messages[date].map((message,i)=>(
                             <Message key={i} Data={message} />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default React.memo(Messages);

{/* <List
                        sx={{
                            position: 'relative',
                            overflow: 'auto',
                            '& ul': { padding: 0 },
                        }}
                        key={index}
                        subheader={<li />}
                        >
                        <li key={`section-${index}`}>
                            <ul>
                                <ListSubheader>
                                    {date}
                                </ListSubheader>
                                {
                                    messages[date].map((message,i)=>(
                                        // <ListItem className="bg-red-300" key={`item-${i}`}>
                                            <Message key={`hello-${i}`} Data={message} />
                                        // </ListItem>
                                    ))
                                }
                            </ul>
                        </li>
                    </List> */}
