import React, { useContext } from 'react'
import { userContext } from './Main'

function Increment() {
    const{Increment} = useContext(userContext)
  return (
    <div>
        <button onClick={Increment}>increment</button>
    </div>
  )
}

export default Increment