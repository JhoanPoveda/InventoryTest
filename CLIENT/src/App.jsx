import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { InventoryPages } from './pages/InventoryPages'
import { InvetoryFormPage } from './pages/InvetoryFormPage'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element= {<Navigate to="/inventory-list"/>}/>
        <Route path="/inventory-list" element= {<InventoryPages/>}/>
        <Route path="/inventory-create" element= {<InvetoryFormPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
