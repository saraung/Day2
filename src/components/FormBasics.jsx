import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const FormBasics = () => {
    var[inputs ,setInputs] =useState({username:"",email:'',password:""})
    const inputHandler=(e)=>{
        console.log(e.target.value);
        setInputs({... inputs,[e.target.name]:e.target.value})
        console.log(inputs)
    }
  return (
    <div style={{marginTop:"10%",marginLeft:"40%"}}>
    <TextField type="text" label='username'
      name="username"
      onChange={inputHandler}
      value={inputs.username}
></TextField>
    <br /><br />
    <TextField type ="text" label='email'
     name="email"
     onChange={inputHandler}
     value={inputs.email}
    ></TextField>
    <br /><br />
    <TextField type ="password" label='password'
     name="password"
     onChange={inputHandler}
     value={inputs.password}
    ></TextField>
    <br /><br />
    <Button id="formloginbtn" variant="contained">Login</Button>
    </div>
  )
}

export default FormBasics
