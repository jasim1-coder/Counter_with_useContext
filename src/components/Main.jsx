import React, { createContext, useState } from 'react'

export const userContext = createContext()

function Main({children}) {
    const [count,setCount] = useState(0)
    const Increment = () => {
        setCount(count + 1)
    }
    const Decrement = () => {
        setCount(count - 1)
    }
  return (
    <div>
        <userContext.Provider value={{count,Increment,Decrement}}>
            {children}
        </userContext.Provider>
    </div>
  )
}

export default Main