import React, { useContext } from 'react'
import Context from './Context'

const History = () => {
  var {Fetch,Insert}=useContext(Context)
 function Delete(index)
 {
  Fetch.splice(index,1)
  Insert(Fetch=>[...Fetch])
  
 }
  return (
    <div>
    <h3>History</h3>
    <ul id="list" className="list">
      {
        Fetch.reverse().map(function(obj,index)
      {
        if(obj.Amount>=0)
        {
          return(
            <li key={index} className="plus">{obj.Text}<span>{obj.Amount}</span><button onClick={()=>Delete(index)} className="delete-btn">x</button></li>
          )
        }
        else
        {
           return(
            <li key={index}  className="minus">{obj.Text} <span>{obj.Amount}</span><button onClick={()=>Delete(index)} className="delete-btn">x</button></li>
           )
        }
        
      })
      }
    
    
    </ul>
    </div>
  )
}
export default History