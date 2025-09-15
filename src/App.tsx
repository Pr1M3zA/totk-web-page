import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import History from './pages/History'
import Characters from './pages/Characters'

function App() {
  return (
    <div className='bg-graphite-gray w-fit'>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/history' element={<History />} />
          <Route path='/characters' element={<Characters />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
