import { createBrowserRouter } from 'react-router'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{ path: '/', element: <HomePage /> }],
  },
])
