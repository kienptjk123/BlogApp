import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout.jsx'
import path from './constants/path.js'
import PostListPage from './routes/PostListPage/PostListPage.jsx'
import SinglePostPage from './routes/SinglePostPage/SinglePostPage.jsx'
import Write from './routes/Write/Write.jsx'
import LoginPage from './routes/LoginPage/LoginPage.jsx'
import Register from './routes/Register/Register.jsx'
import HomePage from './routes/Homepage/Homepage.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk publishable key to the .env.local file')
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: path.homePage,
        element: <HomePage />
      },
      {
        path: path.post,
        element: <PostListPage />
      },
      {
        path: path.slug,
        element: <SinglePostPage />
      },
      {
        path: path.write,
        element: <Write />
      },
      {
        path: path.login,
        element: <LoginPage />
      },
      {
        path: path.register,
        element: <Register />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
)
