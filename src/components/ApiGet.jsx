import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiGet = () => {
    var[data,setData]=useState([])
    //axios syntax || axios.get("api").then().catch();
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res)
            setData(res.data)
            console.log(data)
        })
        .catch((error)=>{
            console.log(error)
    })
},[])
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Website</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                data.map((val,i)=>{
                    return(
                        <TableRow key ={i}>
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{val.email}</TableCell>
                            <TableCell>{val.website}</TableCell>
                            <TableCell>{val.phone}</TableCell>
                        </TableRow>
                    )
                })
            }
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ApiGet
