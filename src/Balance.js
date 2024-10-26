import React, { useContext } from 'react'
import Context from './Context'
const Balance = () => {
  var {Fetch}= useContext(Context)
  var income=0
  var expanse=0
  
  Fetch.map(function(obj)
{
  if(obj.Amount>=0)
  {
     income=income+parseInt(obj.Amount)
  }
  else
  {
    expanse=expanse+parseInt(obj.Amount)
  }
})
  return (
    <div>
      <div className="inc-exp-container">
      <div>
      <h4>Income</h4>
      <p id="money-plus" className="money plus">+₹{income}</p>
      </div>
      <div>
      <h4>Expense</h4>
      <p id="money-minus" className="money minus">₹{expanse}</p>
      </div>
    </div>
    </div>
  )
}
export default Balance