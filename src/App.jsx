// import { useState } from 'react'
// import React from "react";
import {AnimalsIndex} from './pages/AnimalsIndex'
import './App.css'
import { CountDown } from './cmps/CountDown'
import { SeasonIndex } from './pages/SeasonIndex'
// eslint-disable-next-line no-unused-vars
import { SimpleTimer } from './pages/SimpleTimer'
import { Watcher } from './pages/Watcher'
import { AddWatcher } from './cmps/AddWatcher'
// import { Test } from './pages/Test'


function App() {

  return (
    <>
    <AnimalsIndex/>
    <SeasonIndex/>
    {/* <Test startFrom={10}/> */}
    <CountDown startFrom={10} onDone={() => {console.log('Done!')} }/>
    {/* <SimpleTimer/> */}
    <AddWatcher/>
    <Watcher/>
    </>
  )
}

export default App
