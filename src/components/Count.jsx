import React, { useContext } from 'react'
import {userContext} from './Main'

function Task() {
    const {count} = useContext(userContext)
  return (
    <div><h1>count:{count}</h1>

    </div>
  )
}

export default Task