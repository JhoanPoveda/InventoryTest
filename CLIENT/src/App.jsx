import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { InventoryPages } from './pages/InventoryPages'
import { Navigation } from './components/Navigation'
import { ProductPage } from './pages/ProductPage'

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element= {<Navigate to="/inventorys"/>}/>
        <Route path="/inventorys" element= {<InventoryPages/>}/>
        <Route path="/products" element= {<ProductPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
