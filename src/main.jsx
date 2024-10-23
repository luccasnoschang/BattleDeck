import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/routes.jsx'
import { GlobalContextProvider } from './contexts/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>


    <div className='app-container'>


    <RouterProvider router={router}>


    </RouterProvider>


    </div>

  </GlobalContextProvider>

)
