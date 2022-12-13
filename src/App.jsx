import { useState , createContext} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import * as ReactDOM from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './components/Home'
import CheckOut from './components/CheckOut'
export const AppContext = createContext({});
function App() {
  const [count, setCount] = useState(0)
  const [activeMenu, setActiveMenu] = useState(false);
  const [cart, setCart] = useState([])
  const [totalPrice,setTotalPrice]=useState(0)


  return (
    <AppContext.Provider
      value={{
        activeMenu, setActiveMenu,cart,setCart,totalPrice,setTotalPrice
      }}
    
    >
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/check-out" element={<CheckOut />} />
    </Routes>
    </BrowserRouter>
   
    </AppContext.Provider>
  )
}

export default App
