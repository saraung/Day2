import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React
          </Typography>
          <Button ><Link to={"/r"} style={{textDecoration :"none",color:"white"}}>Registration</Link></Button>
          <Button ><Link to={"/t"} style={{textDecoration :"none",color:"white"}}>Table</Link></Button>
          <Button ><Link to={"/"} style={{textDecoration :"none",color:"white"}}>First</Link></Button>
          <Button ><Link to={"/s"} style={{textDecoration :"none",color:"white"}}>StateBasic</Link></Button>
          <Button ><Link to={"/c"} style={{textDecoration :"none",color:"white"}}>Counter</Link></Button>
          <Button ><Link to={"/w"} style={{textDecoration :"none",color:"white"}}>Welcome</Link></Button>
          <Button ><Link to={"/f"} style={{textDecoration :"none",color:"white"}}>Form</Link></Button>
          <Button ><Link to={"/a"} style={{textDecoration :"none",color:"white"}}>APIGET</Link></Button>
          <Button ><Link to={"/i"} style={{textDecoration :"none",color:"white"}}>ImageApi</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
