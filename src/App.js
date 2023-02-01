import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import PurchasePackage from "./pages/purchasepackage";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
    <Routes> 
      <Route element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/package" element={<PurchasePackage />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;


