/*  //ToDo app
import React from 'react'
import ToDo from './ToDoApp/ToDo'


const App = () => {
  return (
    <>
    <ToDo/>
    </>
  )
}

export default App
*/

//!crud App
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './CRUD App/Home'
import Create from './CRUD App/Create'
import Update from './CRUD App/Update'
import Read from './CRUD App/Read'
import './Crud.css'


const App = () => {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/read/:id" element={<Read/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App