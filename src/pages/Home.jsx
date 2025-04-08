import React, { useState } from 'react';
import Download from '../component/Download';
import ExploreMenu from '../component/ExploreMenu';
import FoodDisplay from '../component/FoodDisplay/FoodDisplay';
import Header from '../component/Header';

const Home = () => {

  const [category,setCategory]=useState('All');
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} setCategory={setCategory}/>
        <Download/>
        
        
    </div>
  )
}

export default Home