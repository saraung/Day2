import { Button, TextField } from '@mui/material'
import React from 'react'

const Reg = () => {
  return (
    <div class="box2">
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
