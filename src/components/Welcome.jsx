import { BrowseGallery, BrowseGalleryRounded, ContactEmergency, Home, Image } from '@mui/icons-material'
import {Typography } from '@mui/material'
import React, { useState } from 'react'

const Welcome = () => {
   var [greet,setGreet]=useState("")
   const greethome=()=>{
    setGreet("to home")
   }
   const greetgallery=()=>{
    setGreet("to gallery")
   }
   const greetcontact=()=>{
    setGreet("to contact")
   }

  return (
    <div  style={{marginLeft:"3%",marginTop:"5%",textAlign:'center'}}>
        <Typography variant="h3">welcome {greet} </Typography>
        <br />
      <Home variant="contained" onClick={greethome} fontSize='large'/>&nbsp;&nbsp;
      <Image variant="contained" onClick={greetgallery} fontSize='large'/>&nbsp;&nbsp;
      <ContactEmergency variant="contained" onClick={greetcontact}fontSize='large'/>&nbsp;&nbsp;
      
    </div>
  )
}

export default Welcome
