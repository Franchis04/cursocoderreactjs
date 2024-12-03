import NavBar from './components/NavBar/NavBar'
import ItemListoContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
    <div>
      <NavBar/>
      <ItemListoContainer greeting={"Bienvenidos a mi ecommerce"}/>
    </div>
  )
}

export default App
