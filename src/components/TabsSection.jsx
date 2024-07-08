import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled, textTransform } from '@mui/system';
import { useSelector } from 'react-redux';
import Theme from "../Helper/Mode";

const CustomTab = styled(Tab)(({ Mode }) => ({
    textTransform: 'none',
    fontWeight:'20px', 
    maxHeight: '15px', 
    fontSize: '0.875rem', 
    padding: '6px 12px', 
    '&.Mui-selected': {
       
    },
}));

export default function TabsSection() {
  const [value, setValue] = React.useState(0);
  let mode = useSelector((state)=>state.app.darkMode);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width:'100%',height:'50px' }} className="">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="All" sx={mode ? {color:'white',textTransform:'none'} : {color:'black',textTransform:'none'}} />
        <Tab label="Regulars" sx={mode ? {color:'white',textTransform:'none'} : {color:'black',textTransform:'none'}} />
        <Tab label="Unread" sx={mode ? {color:'white',textTransform:'none'} : {color:'black',textTransform:'none'}} />
        <Tab label="Personal" sx={mode ? {color:'white',textTransform:'none'} : {color:'black',textTransform:'none'}} />      </Tabs>
    </Box>
  );
}