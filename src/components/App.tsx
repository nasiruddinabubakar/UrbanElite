
import { SignatureKind } from "typescript";
import FeaturedProducts from "./FeaturedProduct";
import Header from "./Header";
import Signup from "./Signup";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import { BrowserRouter,Routes,Route } from "react-router-dom";
export default function App() {
  return (
          <>
          
           <BrowserRouter>
           <Header/>
            <Routes>
                <Route path="/" element={<FeaturedProducts/> }/>
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Signup />} />
            </Routes>
           
           </BrowserRouter>
           </>
  );
}
