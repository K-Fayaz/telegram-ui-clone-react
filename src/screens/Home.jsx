
import { useDispatch, useSelector } from "react-redux";
import AllUsers from "../components/AllUsers";
import TemporaryDrawer from "../components/Drawer";
import HeaderNav from "../components/Header";
import UserChat from "../components/userChat";
import Theme from "../Helper/Mode";
import React, { useEffect } from "react";
import { toggleCompactMode, toggleShowMessage } from "../Features/appFeatures";
import TabsSection from "../components/TabsSection";

const Home =  ()=>{

    const mode = useSelector((state)=>state.app.darkMode);
    const chatting = useSelector((state)=>state.app.chatId);
    let dispatch = useDispatch();
    const compactMode = useSelector((state)=>state.app.compactMode);
    const showMessage = useSelector((state)=>state.app.showMessage);

    const handleResize = (e)=>{
        // console.log('Current width of the App is :',window.screen.availWidth);

        let screenWidth = window.screen.availWidth;
        if(screenWidth > 1030){
            dispatch((toggleCompactMode(false)));
            return;
        } 
        dispatch(toggleCompactMode(true));

        if(!chatting){
            if(showMessage){
                dispatch(toggleShowMessage(false));
            }
        }else{
            if(!showMessage){
                dispatch(toggleShowMessage(true));
            }
        }

        console.log("Compact Mode:",compactMode);
        console.log("Show Messages:",showMessage);
    }
    useEffect(()=>{
        window.addEventListener('resize',handleResize);
        return()=>{
            document.removeEventListener('resize',handleResize);
        }
    },[compactMode,showMessage]);
    
    return (
        <>
            <main style={
                mode ? { background: Theme.dark.bg , color: Theme.dark.text  }
                     : { background: Theme.light.bg, color: Theme.light.text }
            } className=" w-full h-screen overflow-hidden flex">
                {
                    !compactMode && <section className={`xl:w-1/4 lg:w-1/3 h-full ${compactMode && !showMessage ? 'w-full':''} border-r-[0.5px] border-[#5e5d5d]`}>
                                        <HeaderNav/>
                                        <TabsSection/>
                                        <AllUsers/>
                                    </section>
                }
                {
                    compactMode && !showMessage && <section className={`xl:w-1/4 lg:w-1/3 h-full ${compactMode && !showMessage ? 'w-full':''} border-r-[0.5px] border-[#5e5d5d]`}>
                                                        <HeaderNav/>
                                                        <TabsSection/>
                                                        <AllUsers/>
                                                    </section>
                }
                {
                    !compactMode && <UserChat/>
                }
                {
                    compactMode && showMessage && <UserChat/>
                }
            </main>
            <TemporaryDrawer/>
        </>
    )
};

export default Home;