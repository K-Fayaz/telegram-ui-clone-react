import MenuIcon from '@mui/icons-material/Menu';
import HeaderTextField from './HeaderTextField';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenDrawer } from '../Features/appFeatures';



const HeaderNav = ()=>{
    const mode = useSelector((state)=>state.app.darkMode);
    let dispatch = useDispatch();

    const handleMenuClick = ()=>{
        dispatch(setOpenDrawer(true));
    }

    return(
        <main 
            className={`
                flex flex-row justify-between items-center py-[8px]
                ${mode ? '':'bg-[#57849e]'}
                `
            }
            
            >
            <div className='ml-5 mr-6 cursor-pointer' onClick={handleMenuClick} >
                <MenuIcon className={`text-3xl`} style={{color:'white'}} />
            </div>
            <HeaderTextField/>
        </main>
    )
}


export default HeaderNav;