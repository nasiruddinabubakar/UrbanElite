
import { SignatureKind } from "typescript";
import FeaturedProducts from "./FeaturedProduct";
import Header from "./Header";
import Signup from "./Signup";
import SingleProduct from "./SingleProduct";
export default function App() {
  return (
            <>
                <Header />
                 <SingleProduct /> 
                <FeaturedProducts />
                {/* <Signup /> */}

            </>
  );
}
