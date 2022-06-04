import React from 'react'
import { AppBar,Toolbar,styled,Typography } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';


const Navbar = () => {

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})




  return (
    <AppBar position='sticky'>
      <StyledToolbar>
          <Typography  variant='h6' sx={{display: {xs:"none", sm:"block" }}}>MUI DEV</Typography>
          <PetsIcon sx={{display: {xs:"block", sm:"none" }}} />
      </StyledToolbar>
    </AppBar>
  ) 
}

export default Navbar