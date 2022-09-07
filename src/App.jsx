import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greetins='Mallets Store' />
      <ItemDetailContainer/>
    </div>
  )
}

export default App
