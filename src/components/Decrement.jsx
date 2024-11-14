import React, { useContext } from 'react'
import { userContext } from './Main'

function Decrement() {
    const {Decrement} = useContext(userContext)
  return (
    <div>
        <button onClick={Decrement}>decrement</button>
    </div>
  )
}

export default Decrement