import React, { useState } from 'react'
import "./Style.css"
import Left from './Left'
import Balance from './Balance'
import History from './History'
import AddTransaction from './AddTransaction'
import Context from './Context'
const App = () => {
  const [state,setstate]=useState([])
 
  
  return (
    <div>
      <h2>Expense Tracker</h2>
      <Context.Provider value={{"Insert":setstate,"Fetch":state}}>
      <Left/>
      <Balance/>
      <History/>
      <AddTransaction/>
      </Context.Provider>
    </div>
  )
}
export default App