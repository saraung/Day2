import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ImageApi = () => {
    var[data,setData]=useState()
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/category/jewelery").then(
            (res)=>{
                console.log(res.data)
                setData(res.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    },[])
  return (
    <div style={{margin:"4%"}}>
        <h1>Jewellery</h1>
        <Grid container spacing={2}>
            {data?.map((val,i)=>{
                return(
                    <Grid item xs={12} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={val.image}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {val.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {val.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">add</Button>
                            <Button size="small">delete</Button>
                        </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    </div>
  )
}

export default ImageApi
