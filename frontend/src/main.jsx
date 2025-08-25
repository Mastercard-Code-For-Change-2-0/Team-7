import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AdminDashboard from './components/admin/AdminDashboard.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/adminDashboard', element: <AdminDashboard /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
