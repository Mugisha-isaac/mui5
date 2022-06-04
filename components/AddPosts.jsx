import React from "react";
import {Tooltip,Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const AddPosts = () => {
  return (
    <Tooltip title="Add" sx={{position:'fixed', bottom:20, left:{xs:"calc(50% -  20px)", md:30}}}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default AddPosts;
