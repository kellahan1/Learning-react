import React, {useState} from 'react';
import {Box} from '@mui/material';

import HeroBanner from '../components/HeroBanner.js';
import Exercises from '../components/Exercises.js';
import SearchExcercises from '../components/SearchExercises.js';


const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExcercises/>
      <Exercises/>
    </Box>
  )
}

export default Home