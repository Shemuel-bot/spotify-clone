
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SignUp from "./SignUp.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
