import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from "react-router";
import './index.css'
import App from './App.tsx'
import { Homepage,Address,Service} from './Pages/Index.tsx'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
     <BrowserRouter>
      <Routes>
        <Route  element={<App />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/address-list" element={<Address />} />
        <Route path="/service-list" element={<Service />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
