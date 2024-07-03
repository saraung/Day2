import { Button, TextField, Typography } from '@mui/material'
import React from 'react'


const First = () => {
  return (
    <div class="box">
      {/* <h1>login page</h1>
      <input type="text" placeholder='username'/>
      <br></br>
      <br />
      <input type="password" placeholder='password'/>
      <br />
      <br />
      <button id="loginbutton">Login</button>
      <br /> */}
      
      <br />
      <Typography variant="h3"> Login Page</Typography>
      <br />
      <TextField  label="username" variant="outlined" />
      <br />
      <TextField  type="password" label="password" variant="filled" />
      <br />
      <TextField  type="password" label="confirm password" variant="standard" />
      <br />
      <Button variant="text">Login</Button>&nbsp;
      <Button variant="outlined">Login</Button>&nbsp;
      <Button variant="contained" color="success">Login</Button>&nbsp;
    </div>
  )
}

export default First
