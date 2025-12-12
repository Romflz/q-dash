import { createBrowserRouter } from 'react-router'
import HomePage from '@/pages/HomePage'
import MainLayout from '@/layouts/MainLayout'
import BoardPage from '@/pages/BoardPage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/board/:boardId', element: <BoardPage /> },
    ],
  },
])
