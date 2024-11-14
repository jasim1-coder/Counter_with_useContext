import React from 'react'
import './App.css'
import Main from './components/Main'
import Task from './components/Count'
import Decrement from './components/Decrement'
import Increment from './components/Increment'
function App() {
  return (
    <Main>
        <Task/>
        <Increment/>
        <Decrement/>
    </Main>
  )
}

export default App
