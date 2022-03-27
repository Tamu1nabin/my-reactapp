import { Grid, Typography ,Container,Box,Link} from '@mui/material'
import React from 'react'
import Nav from '../Components/Layout/Nav'
import Footer from '../Footer'

const About = () => {
  return (
    <>
    <Nav/>

    <Typography variant='h4' align='center' sx={{mt:"10px"}}>
        About Us
    </Typography>

    <Container maxWidth='md'>
    <Typography variant='body1' align='justify'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ea a veniam modi vel, debitis quaerat? Laudantium tempora minima vel sequi placeat maxime? Ut, odit delectus sequi id fugiat pariatur!
    </Typography>
    </Container>
    
    <Grid container justifyContent='space-evenly' p={3} boxShadow={3} mt={3}>
      <Grid item xs ='4'>
      <img src='./carousel_img/2.jpg'style={{height:"200px", width:"100%"}}/>
      <Typography variant='h6' align='center'>Mr. ABC XYZ</Typography>
      <Typography variant='body1' align='center'>Managing Director</Typography>
      <Box display='flex' justifyContent='space-between'>
      <Typography variant='body2'>abc@gmail.com</Typography>
      <Typography variant='body2'>+9779846641178</Typography>
      </Box>
      <Link href ="#" variant='button'>Portfolio</Link>
      </Grid>
      <Grid item xs ='4' sx={{backgroundColor:"blue"}}>Second</Grid>
      <Grid item xs ='4' sx={{backgroundColor:"red"}}>Third</Grid>
    </Grid>
    
    
<Footer/>
    </>
  )
}

export default About