import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tab = () => {
  return (
    <div>
      <TableContainer sx={{ border: '1px solid black' }}>
        <Table >
            <TableHead >
                <TableRow >
                    <TableCell >Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                </TableRow>
            </TableHead>
            <TableBody >
                <TableRow>
                    <TableCell >Saraung</TableCell>
                    <TableCell>21</TableCell>
                    <TableCell>IND</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Saraung</TableCell>
                    <TableCell>21</TableCell>
                    <TableCell>IND</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Saraung</TableCell>
                    <TableCell>21</TableCell>
                    <TableCell>IND</TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Tab
