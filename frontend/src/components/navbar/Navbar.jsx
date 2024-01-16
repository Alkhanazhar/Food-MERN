import React, { useContext, useState } from 'react'
import { Icon, Typography, Box, Button, Menu, MenuItem} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import classes from "./Navbar.module.css"
import NavbarContainer, { IconNavbar } from './NavbarContainer';
import CartContext from '../../store/context';
const Navbar = () => {
  const {cartLength}=useContext(CartContext)
    const [openMenu,setOpenMenu]=useState(null)
    const openMenuHandler=(e)=>{
        setOpenMenu(true)
    }
       const closeMenuHandler=(e)=>{
        setOpenMenu(null)
    }
  return (
<NavbarContainer>
<IconNavbar />
<Button  sx={{display:{xs:"none",md:'flex',color:'white'}}}>
<Typography variant='h5' sx={{flexGrow:1}} px="1rem"><Link to={"/"}>Food-App</Link></Typography></Button>
<Box sx={{display:{xs:"none",md:'flex'}}}>
<Button color='inherit'><Link className={classes.link} to={"/"}>foods</Link></Button> 
<Button color='inherit'><Link className={classes.link} to={"/cart"}>cart <sup>{cartLength}</sup></Link></Button> 
</Box>
<Box sx={{display:{xs:"flex",md:'none'}}}>
<Icon edge="start" fontSize='large' color='inherit' onClick={openMenuHandler} >
   <MenuIcon fontSize='large'  />
</Icon>
<Menu open={Boolean(openMenu)} onClose={closeMenuHandler} sx={{display:{xs:"block",md:"none"},cursor:'pointer'}} >
<div className={classes.menu}>
 <Link className={classes.menuLink} to={"/"}><MenuItem>foods</MenuItem></Link>
 <Link className={classes.menuLink} to={"/cart"}><MenuItem>cart <sup>{cartLength}</sup></MenuItem></Link>

</div>
</Menu>
</Box>
</NavbarContainer>
  )
}

export default Navbar


