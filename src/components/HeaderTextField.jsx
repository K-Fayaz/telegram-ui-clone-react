import { TextField } from '@mui/material';
import {InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Theme from '../Helper/Mode';


const HeaderTextField = ()=>{
    const [searchText,setSearchText] = useState('');
    const mode = useSelector((state)=>state.app.darkMode);

    const handleSearchInput = (e)=>{
        setSearchText(e.target.value);
    }

    return(
        <div className="container z-10 sticky top-0 justify-self-end text-white">
            <TextField 
                className="w-[90%] mx-auto"  // Tailwind class for 90% width and centering
                size="small"
                id="input-with-icon-textfield"
                placeholder='Search'
                value={searchText}
                onChange={handleSearchInput}
                autoComplete='off'
                InputProps={{
                    startAdornment: (
                        <InputAdornment className="text-sm font-bold" position="start">
                            <SearchIcon className="text-[#e3dfdb]" />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
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
                style={{ color: 'white' }}  // Apply custom inline style if needed
            />

        </div>
    )
}

export default HeaderTextField;