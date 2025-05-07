import { Route,Routes } from 'react-router-dom'
import HomePage from '@/pages/HomePage/HomePage'
import ProductsPage from '@/pages/ProductsPage/ProductsPage'

function Routes() {
  return (
    <Routes>
      <Route index element={HomePage} />
      <Route path="/products" element={ProductsPage} />
    </Routes>
  )
}

export default Routes