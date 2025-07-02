import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import NavbarShared from './components/shared/NavbarShared/NavbarShared'
import './App.css'

function App() {
 

  return (
    <>
    <NavbarShared/>
    <Routes>

      <Route path="/" element={<HomePage/>} />

    </Routes>
    </>
  )
}

export default App
