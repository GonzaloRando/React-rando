import React from 'react'
import { Routes, Route } from 'react-router-dom'

function Cataloge() {
  return (
    <div>
    Cataloge
    <Routes>
   
        <Route path='/prueba' element={<p>si señor</p>} />
        </Routes>
    </div>
  )
}

export default Cataloge