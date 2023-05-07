import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './components/layout';
import { HomePage } from './pages/home';
import { ProductPage } from './pages/product';
import { BasketPage } from './pages/basket';
import { LoginPage } from './pages/login';
import { AdminPage } from  './pages/admin-panel';
import { CreatePage } from  './pages/create';


const mainRoutes = [

  { path: 'product/:id', element: <ProductPage /> },
  { path: 'basket', element: <BasketPage /> },
  { path: 'login', element: <LoginPage /> },
  { path: 'admin', element: <AdminPage /> },
  { path: 'create', element: <CreatePage /> },
]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {
            mainRoutes.map(({ path, element }) => (
              <Route
                key={path}
                index={!path}
                path={path}
                element={element}
              />
            ))
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
