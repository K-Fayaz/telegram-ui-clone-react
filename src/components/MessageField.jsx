import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import Theme from "../Helper/Mode";
import { useState } from "react";

const MessageField = ()=>{
    const [value,setValue] = useState("");
    const mode = useSelector((state)=>state.app.darkMode);

    return(
        <div className="mt-2">
            <TextField
                value={value}
                placeholder="Enter Message"
                size="small"
                className="w-full mx-auto"
                onChange={(e) => setValue(e.target.value)}
                sx={{
                    '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'white', // Set border color to white
                    },
                    '& .MuiInputBase-input': {
                        color: 'white', // Set text color to white
                    },
                    '&:hover fieldset': {
                        borderColor: 'white', // Maintain white border on hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'white', // Maintain white border on focus
                    },
                    },
                }}
                />

        </div>
    )
};

export default MessageField;
