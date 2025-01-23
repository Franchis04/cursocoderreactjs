import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListoContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
        <BrowserRouter>
          <NavBar/>

          <Routes>
            <Route path="/" element = {<ItemListoContainer greeting={"Bienvenidos a TiendaBOCA"}/> } />
            <Route path="/category/:idCategory" element={<ItemListoContainer greeting={"Bienvenidos a TiendaBOCA"}/> }/>
            <Route path="/detail/:idProduct" element={ ItemDetailContainer } />
          </Routes>

        </BrowserRouter>
        
    </div>
    
  )
}

export default App
