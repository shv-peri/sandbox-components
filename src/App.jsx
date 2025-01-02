// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Carousel from './components/Carousel';
import ScheduleTickets from './components/schedule';

function App() {

  return (
    <>
    <Banner />
    <Carousel />
    <ScheduleTickets/>
    </>
  );
}

export default App;
