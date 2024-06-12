import './App.css'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Movies from './pages/Movies'
import {Routes , Route } from 'react-router-dom'

function App() {

  return (
    <div className = 'App'>
      <Routes >
      
      <Route path='/' element={<HomePage />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
