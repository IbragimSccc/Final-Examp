import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { Layout } from './components/layout'
import { HomePage } from './pages/home'
import { ProductPage } from './pages/product'
import { BasketPage } from './pages/basket'
import { LoginPage } from './pages/login'
import { AdminPage } from  './pages/admin panel'
import { CreatePage } from  './pages/create'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/basket" element={<BasketPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/create" element={<CreatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
