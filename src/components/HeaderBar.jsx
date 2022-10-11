import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import NotesIcon from '../logo.png';


const Header = styled(AppBar)`
  z-index: 1201;
  background: #E8DFCA;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`

const Heading = styled(Typography)`
  color: black;
  font-size: 24px;
  margin-left: 25px;
`


const HeaderBar = ({ open, handleDrawer }) => {
  

  
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: '10px'}}
          edge="start"
        >
          <Menu />
        </IconButton>
        <img src={NotesIcon} alt="logo" width={28} height={35}></img>
        <Heading>Note-Kar</Heading>
      </Toolbar>
    </Header>
  )
}

export default HeaderBar;