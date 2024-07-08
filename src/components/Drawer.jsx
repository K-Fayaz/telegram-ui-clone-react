import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenDrawer, toggleDarkMode } from '../Features/appFeatures';
import ReactDOM from 'react-dom';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import GradeSharpIcon from '@mui/icons-material/GradeSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import "../customScroll.css"

// import Theme from "../Helper/Mode";


const TemporaryDrawer = ()=> {
//   const [open, setOpen] = React.useState(false);
  let open = useSelector((state)=>state.app.openDrawer);
  let mode = useSelector((state)=>state.app.darkMode);
  let Theme = useSelector((state)=>state.app.theme);
  let dispatch  = useDispatch();

  const toggleDrawer = (newOpen) => () => {
    dispatch(setOpenDrawer(newOpen));
  };

    let list1 = [
        {
            name:'New Group',
            icon: <PeopleOutlineOutlinedIcon style={{color: Theme.text}}/>
        },
        {
            name:'Contact',
            icon: <PersonOutlinedIcon style={{color: Theme.text}}/>
        },
        {
            name:'Calls',
            icon: <CallOutlinedIcon style={{color: Theme.text}}/>
        },
        {
            name:'Saved Messages',
            icon: <GradeSharpIcon style={{color: Theme.text}} />
        },
        {
            name:'Settings',
            icon: <SettingsOutlinedIcon style={{color: Theme.text}}/>
        },

    ]

    let list2 = [
        {
            name:'Invite Friends',
            icon: <PersonAddOutlinedIcon style={{color: Theme.text}}/>
        },
        {
            name:'Teligram features',
            icon: <HelpOutlineOutlinedIcon style={{color: Theme.text}} />
        }
    ]

    const DrawerList = (
        <main className='w-full font-body'>
            <div className={`p-2 pt-5 text-white ${mode ? '':`bg-[${Theme.main || ''}]`}`}>
                <div className={`flex justify-between`}>
                    <Avatar src={''} alt="avatar" sx={{width:45,height:45}} />
                    <Tooltip>
                        <IconButton>
                            {
                                mode ? <WbSunnyIcon  
                                            style={{color: 'white'}}
                                            onClick={()=>dispatch(toggleDarkMode())}
                                        /> 
                                    : <DarkModeIcon 
                                            style={{color: 'white'}}
                                            onClick={()=>dispatch(toggleDarkMode())}
                                        />
                            }
                        </IconButton>
                    </Tooltip>
                </div>
                <h1>Pankaj Bansal</h1>
                <div className='flex justify-between items-center'>
                    <p>+91 7289926396</p>
                    <Tooltip>
                        <IconButton>
                            <ExpandMoreIcon style={{color: 'white'}} />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <Box>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleSharpIcon style={{color: Theme.text}} />
                        </ListItemIcon>
                        <ListItemText primary="My Profile" className='font-body' />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider/>
                {
                    list1.map((item,index)=>(
                        <List key={index}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText className='text-sm font-body'  primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    ))
                }
                <Divider/>
                {
                    list2.map((item,index)=>(
                        <List key={index}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText className='text-sm font-body' primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    ))
                }
            </Box>
        </main>
    )

  return ReactDOM.createPortal(
    <div>
      <Drawer 
        open={open} 
        onClose={toggleDrawer(false)}
        sx={{ '& .MuiPaper-root': { backgroundColor:Theme.bg,color: Theme.text , width:'290px' }  }}
    >
        {DrawerList}
      </Drawer>
    </div>,
    document.getElementById('portal')
  );
}

export default TemporaryDrawer;