import './App.css'
import Registration from './pages/registration/Registration'
import NotFound from './pages/NotFound'
import GenrePage from './pages/genre/GenrePage'
import HomePage from './pages/homepage/Homepage'
import Dashboard from './pages/dashboard/Dashboard'
import PromotionPage from './pages/promotion/PromotionPage'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

function App() {

  return (
    <Provider store={store} >
      <div className='App'>
        <Routes >
          <Route path='/' element={<Registration />} />
          <Route path='/genre' element={<GenrePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/promotion' element={<PromotionPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App
