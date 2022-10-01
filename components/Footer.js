import { Box, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box bgcolor="#000" color="#fff" p={2} marginBottom={8}>
        <Typography align="center" color="#ccc">
            Copyright ©2022. All rights reserved
        </Typography>
    </Box>
  )
}

export default Footer