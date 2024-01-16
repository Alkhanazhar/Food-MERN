import React from 'react'
import { AppBar, Icon, Toolbar } from '@mui/material'
import LunchDiningIcon from '@mui/icons-material/LunchDining';


export const IconNavbar=()=>{
return <Icon fontSize='large' sx={{flexGrow:{xs:1,md:0}}}>
<LunchDiningIcon fontSize='large' />
</Icon>
}
const NavbarContainer = (props) => {
  return (
    <AppBar position='fixed'>
    <Toolbar sx={{bgcolor:"#be148d"}}>
        {props.children}
    </Toolbar>
    </AppBar>
  )
}

export default NavbarContainer
