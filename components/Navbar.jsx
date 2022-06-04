import React from "react";
import { AppBar, Toolbar, styled, Typography, Box, Badge } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import { theme } from "../themes/theme";
import { InputBase } from "@mui/material";
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
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
     display:'flex',
     gap:20,
     alignItems:"center"
  }));

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
         <Avatar sx={{width:30, height:30}} src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/president-thomas-jefferson-war-is-hell-store.jpg" />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
