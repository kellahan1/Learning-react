import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material';

import HeroBannerImg from '../assets/images/banner.png'; 

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg:'212px', xs:'70px'}, ml: {sm: '50px'}}} position='relative' p='20px'>
      <Typography colour='#FF2625' fontweight='600' fontsize='26px'>
        Fitness Club
      </Typography>
      <Typography fontWeight={'700'} sx={{fontsize: {lg:'44px', xs:'40px'}}} mb='23px' mt='30px'>
        Sweat, Smile,<br/> and repeat
      </Typography>
      <Typography fontsize='22px' lineHeight={'35px'} mb='3'>
        Check out the most effective exercises
      </Typography>
      <Button variant='contained' color='error' href='#exercises' mb='4'> Explore Exercises</Button>
      <Typography fontweight='600' color='#FF2625' fontsize='200px' sx={{ opacity:'0.5', display:{lg:'block', xs:'none'}}}>
        Exercises
      </Typography>
      <img src={HeroBannerImg} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner