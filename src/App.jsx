import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Company from './pages/Company'
import Career from './pages/Career'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import DeveloperDetails from './components/details/details'
import Photo from './components/photo/Photo'
import TeamDetail from './pages/TeamDetail'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>

        <Route index element={<Blog />} />

        <Route path='career' element={<Career />} />
        <Route path='career/:id' element={<DeveloperDetails />} />

        <Route path='company' element={<Company />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
        <Route path='privacy' element={<Privacy />} />

        <Route path='team' element={<Photo />} />
        <Route path='team/:id' element={<TeamDetail />} />

      </Route>
    </Routes>
  )
}

export default App