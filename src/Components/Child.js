import React, { useContext } from 'react'
import { CreateContext } from './Context'
export default function Child() {
    let Cotext = useContext(CreateContext)
  return (
 <div>This is child 1: {Cotext} </div>
  )
}
