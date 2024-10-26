import React, { useContext, useState } from 'react'
import Context from './Context'

const AddTransaction = () => {
   const[Obj,setObj]=useState({})
   var {Insert,Fetch}= useContext(Context)
   function set(event)
   {
     setObj({...Obj,[event.target.name]:event.target.value})
   }
   function Add()
   {
     if(Obj.Text && Obj.Amount)
     {
      if(Fetch.length==0)
      {
        Insert([Obj]);
      }
      else
      {
       Insert(Fetch=>[...Fetch,Obj]);
        
      }
       }
     else
     {
       alert("Field is empty")
     }
     
   }
  return (
    <div>
       <h3>Add new transaction</h3>
      <form id="form">
      <div className="form-control">
       <label htmlFor="text">Text</label>
       <input type="text" onChange={set} name="Text" placeholder="Enter text..." />
      </div>
      <div className="form-control">
       <label htmlFor="amount">Amount<br />(negative - expense, positive - income)</label>
       <input type="number" onChange={set} name="Amount" placeholder="Enter amount..." />
      </div>
      <button type='button' className="btn" onClick={Add}>Add transaction</button>
      </form>
    </div>
  )
}
export default AddTransaction