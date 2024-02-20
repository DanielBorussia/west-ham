import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
