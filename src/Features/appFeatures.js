import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    chatId: null,
    user: null,
    messages: JSON.stringify(Object.create({})),
    openDrawer: false,
    darkMode: true,
    showMessage: false,
    compactMode: false,
    theme:{
        bg:'#151e24',
        text:'white',
        hover: '#222e36'
    }
};

const appSlice = createSlice({
    name:'App',
    initialState,
    reducers:{
        setChatId: (state,action)=>{
            state.chatId = action.payload;
        },
        setUser: (state,action)=>{
            state.user = action.payload;
        },
        setMessages: (state,action)=>{
            state.messages = action.payload;
        },
        setOpenDrawer: (state,action)=>{
            state.openDrawer = action.payload;
        },
        toggleDarkMode: (state,action)=>{
            state.darkMode = !state.darkMode;
            if(state.darkMode){
                state.theme = {
                    bg:'#151e24',
                    text:'white',
                    hover: '#222e36'
                }
            }else{
                state.theme = {
                    bg:'white',
                    text:'black',
                    main:'#57849e'
                }
            }
        },
        toggleShowMessage: (state,action)=>{
            state.showMessage = action.payload;
        },
        toggleCompactMode: (state,action)=>{
            state.compactMode = action.payload;
        }
    }
});


export default appSlice.reducer;
export const {
    setUser,
    setChatId,
    setMessages,
    setOpenDrawer,
    toggleDarkMode,
    toggleCompactMode,
    toggleShowMessage,
} = appSlice.actions