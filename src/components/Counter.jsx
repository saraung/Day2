import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [num,setNum]=useState(0)

    const incrementNum =()=>{
        setNum(++num)
    }
    const decrementNum=()=>{
        setNum(--num)
    }

  return (
    <div style={{marginLeft:"45%",marginTop:"10%"}}>
        <br />
        <Button variant="contained" color='success' onClick={incrementNum}>+</Button>
        <Typography variant='h1'>{num}</Typography>
        <Button variant="contained" color="error" onClick={decrementNum}>-</Button>
    </div>
  )
}

export default Counter

