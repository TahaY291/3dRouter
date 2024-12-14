import Navbar from './components/Navbar'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Layout from './Layout/Layout'
import ContactLayout from './Layout/ContactLayout'
import Info from './components/Info'
import More from './components/More'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>

        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<ContactLayout />} >
          <Route path='info' element={<Info />} />
          <Route path='more' element={<More />} />
        </Route>

      </Route>
    )
  )


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
