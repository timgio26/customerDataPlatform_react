import { Outlet, useNavigate } from "react-router";
import { ToastContainer } from 'react-toastify';
import logoSP from "./assets/android-chrome-192x192.png"
function App() {
  const navigate = useNavigate()
  return (
    <div className="h-dvh justify-between flex flex-col">
      <header className="px-5 py-2 shadow">
        <div className="flex flex-row items-center gap-2" onClick={()=>navigate('/')}>

        <img src={logoSP} alt="logo" className="h-8"/>

        <span className="text-2xl">
          Setia Purindo
          </span>

        </div>
          </header>
      <div className="h-full overflow-y-scroll px-4 sm:px-10 py-5 bg-slate-50">
        <Outlet />
      </div>
      <footer>footer</footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
