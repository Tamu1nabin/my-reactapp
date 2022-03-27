import React from 'react'
import Nav from '../Components/Layout/Nav'
import { Container, TextField, Typography } from '@mui/material'
import Footer from '../Footer'
import { Box } from '@mui/system'

const Contact = () => {
  return (
    <>
    <Nav/>
    <Typography variant='h4' align='center' sx={{mt:"10px"}}>
    contact
    </Typography>
<Container >
    <Box className='contact-container'display='flex' p={3}>
        <Box className='contact-address' width={'45%'}>
            <Typography variant='h4' fontWeight='bold' sx={{textDecoration:'underline'}}>Gurung Store</Typography>
            <Typography variant='h6'>Kathamandu, Nepal</Typography>
            <Typography variant='h6'>Mobile Number: +977 9864441178</Typography>
            <Typography variant='h6'>Gmail: Gurungstor@gmail.com</Typography>
            <Typography variant='h6'>website: ww.gurungstore.com</Typography>
        </Box>
        <Box className='contact-form' width={'55%'}>
            <TextField label='email' variant='outlined' sx={{mb:'10px'}} fullWidth='true' required='true'></TextField>
            <br/>
            <TextField label='Subject' variant='outlined' sx={{mb:'10px'}} fullWidth='true'></TextField>
            <br/>
            <TextField label='Message' variant='outlined' fullWidth='true'></TextField>
        </Box>

        
    </Box>
    </Container>
    <Container>
        
    </Container>

    <Footer/>
    </>
  )
}

export default Contact