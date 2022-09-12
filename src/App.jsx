import ItemListContainer from './Pages/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer'
import Category from './Pages/Category/Category'
import {BrowserRouter, Routes,Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greetins='Mallets Store' />} />
        <Route path="category/:categoryId" element={<Category />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
