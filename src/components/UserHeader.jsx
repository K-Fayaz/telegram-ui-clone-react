import { Avatar, Icon } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from "react-redux";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Theme from "../Helper/Mode";
import { setChatId, toggleShowMessage } from "../Features/appFeatures";

const UserHeader = ()=>{

    let mode = useSelector((state)=>state.app.darkMode);
    const compactMode = useSelector((state)=>state.app.compactMode);
    const showMessage = useSelector((state)=>state.app.showMessage);
    let dispatch = useDispatch();

    const handleGoBack = ()=>{
        dispatch(toggleShowMessage(false));
        dispatch(setChatId(null));
    }

    return(
        <main style={
            mode ? { backgroundColor: Theme.dark.bg , color: Theme.light.text }
                 : { backgroundColor: "#57849e", color: Theme.light.text }
        } className="w-full p-[6px] flex justify-between items-center border-[#5e5d5d]">
            <div className="ml-2 flex items-center">
                {
                    showMessage && compactMode && <KeyboardBackspaceIcon className={`text-white mr-5`} onClick={handleGoBack}/>
                }
                <Avatar
                    src={''}
                    alt="User Profile"
                    sx={{width:45,height:45}}
                />
            </div>
            <div>
                {/* Search */}
                <Tooltip>
                    <IconButton>
                        <SearchIcon className="text-white text-md"/>
                    </IconButton>
                </Tooltip>

                {/* Call */}
                <Tooltip>
                    <IconButton>
                        <CallIcon className="text-white text-md"/>
                    </IconButton>
                </Tooltip>
                
                {/* Menu */}
                <Tooltip>
                    <IconButton>
                        <MoreVertIcon className="text-white text-md"/>
                    </IconButton>
                </Tooltip>

            </div>
        </main>
    )
};

export default UserHeader;