import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <Box sx={{
            bgcolor:'#3b6bff',
            height:'80px',
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center'

        }}>
            <Link to='/'  style={{
                color:'white',
            textDecoration:'none',
            margin:"20px",
            fontSize:'25px',
            cursor:'pointer',   
        }}>Home</Link>
            <Link to={'/Add'}
            style={{
                color:'white',
            textDecoration:'none',
            margin:"20px",
            fontSize:'25px',
            cursor:'pointer',   
        }}> Add</Link>
        

        </Box>
    )
}

export default Nav
