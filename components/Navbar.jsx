import React, { useState } from "react";
import { AppBar, Toolbar, styled, Typography, Box, Badge,Menu,MenuItem } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import { theme } from "../themes/theme";
import { InputBase } from "@mui/material";
import Avatar from '@mui/material/Avatar';

const Navbar = () => {

    const [open,setOpen] = useState(false)


  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const SearchBar = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
     display:'none',
     gap:20,
     alignItems:"center",
     [theme.breakpoints.up("sm")]:{
        display:"flex"
     }
  }));

  const UserBox = styled(Box)(({theme})=>({
      display:"flex",
      alignItems:"center",
      gap:10,
      [theme.breakpoints.up("sm")]:{
          display:'none'
      }    
  }))

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBar>
          <InputBase placeholder="search..." />
        </SearchBar>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications color="action" />
          </Badge>
          <Avatar onClick={e=>setOpen(true)} sx={{width:30, height:30}} src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/president-thomas-jefferson-war-is-hell-store.jpg" />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
        <Avatar sx={{width:30, height:30}} src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/president-thomas-jefferson-war-is-hell-store.jpg" />
        <Typography variant="span" >John Doe</Typography>
        </UserBox>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(!open)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
