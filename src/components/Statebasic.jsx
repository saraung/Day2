import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
    var [name,setName]=useState("saraung");
    var [data,setData]=useState();
    const inputHandler=(e)=>{
        console.log(e.target.value)
        setName(e.target.value)
    }
        
    const changeName = () =>{
        console.log("button clicked")
        setData(name);
    }
        
    

  return (

    <div style={{marginLeft:"42%",marginTop:"10"}}>
      <Typography variant='h3'>Hello {data}</Typography>
      <br />
      <TextField variant="outlined" onChange={inputHandler}/>
      <br /><br />
      <Button variant="contained" onClick={changeName}>submit</Button>
    </div>
  )
}

export default Statebasic
