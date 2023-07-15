import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routes/Router'

function App() {

  return (
    <div className='bg-slate-100 w-screen h-screen'>
 <RouterProvider router={router} />   
  </div>
  )
}

export default App
