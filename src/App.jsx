import ItemListContainer from './Pages/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer'
import Category from './Pages/Category/Category'
import Cart from './Pages/Cart/Cart'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import {CartProvider} from './context/CartProvider'


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greetins='Mallets Store' />} />
          <Route path="category/:categoryId" element={<Category />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
