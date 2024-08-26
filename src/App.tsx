import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.js'
import 'leaflet/dist/leaflet.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavRoutes from './NavRoutes/NavRoutes';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
        />
        <NavRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
