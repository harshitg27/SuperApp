import './App.css'
import Registration from './pages/registration/Registration'
import NotFound from './pages/NotFound'
import GenrePage from './pages/genre/GenrePage'
import {Routes , Route } from 'react-router-dom'

function App() {

  return (
    <div className = 'App'>
      <Routes >
      
      <Route path='/' element={<Registration />} />
      <Route path='/genre' element={<GenrePage />} />
      <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
