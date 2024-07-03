import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Reg = (props) => {
  var[val,setVal]=useState()
 
  return (
    <div class="box2">
        <Typography>{props.data.name}</Typography>
        <h1>Registration Form</h1>
        <TextField type ="text" variant="outlined" placeholder="name"></TextField>
        <br />
        <TextField type ="number" variant="outlined" placeholder="age"></TextField>
        <br />
        <TextField type ="text" variant="outlined" placeholder="Email"></TextField>
        <br />
        <TextField type ="text" variant="outlined" placeholder="Fathers name"></TextField>
        <br />
        <TextField type ="text" variant="outlined" placeholder="Mothers name"></TextField>
        <br />
        <TextField type ="password" variant="outlined" placeholder="password"></TextField>
        <br />
        <TextField type ="password" variant="outlined" placeholder="confirm password"></TextField>
        <br />
        <Button id= "regsubmitbutton" variant="contained" color="success" >Submit</Button>
        
    </div>
  )
}

export default Reg
