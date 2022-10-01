import { Box, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box bgcolor="#000" color="#fff" p={2}>
        <Typography align="center" color="#ccc">
            Copyright &copy 2022. All rights reserved
        </Typography>
    </Box>
  )
}

export default Footer