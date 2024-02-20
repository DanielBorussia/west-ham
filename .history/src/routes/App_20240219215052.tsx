import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Players from '../pages/Players'

const App = () => {
  return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/players" element={<Players/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
