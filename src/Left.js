import React, { useContext } from 'react'
import Context from './Context'

const Left = () => {
   var {Fetch}= useContext(Context)
   var balance=0
   Fetch.map(function(obj)
  {
    balance= balance+(parseInt(obj.Amount))
    
  })
   
  return (
    <div>
    <h4>Your Balance</h4>
    <h1>₹{balance}</h1>
    </div>
  )
}
export default Left