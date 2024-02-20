import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Players from '../pages/Players'
import Layout from '../containers/Layout'

const App = () => {
  return (
        <BrowserRouter>
        <Layout>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/players" element={<Players/>} />
        </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App
