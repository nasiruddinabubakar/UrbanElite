import { useDispatch, useSelector } from "react-redux";
import { Heading } from "./Heading";
import { removeItem } from "../actions/actionsCart";
interface FeaturedViewProps {
  category: string;
  description: string;
  id: number;
  image: string[];
  price: number;
  quantity:number;
  rating: any[];
  title: string;
}
export default function () {
  const Cart=useSelector((state:any)=>state.cart.cartItems);
  console.log();
  

  return (
    <div className="cart__container">
      <Heading heading="Cart Items" />
      <div className="cart__shell">
        <div className="cart">
          {Cart.map((item:FeaturedViewProps)=><CartSingleProduct item={item}/>)}
        </div>
        <Checkout/>

      </div>
    </div>
  );
}
export const CartSingleProduct = ({item}:any) => {
  const dispatch=useDispatch();
    const handleRemove=()=>dispatch(removeItem(item.id));
  return (
   <div className="added__products">
     <button onClick={handleRemove}>❌</button>
      <div className="inner__products">
        <div id="pro--img">
          <img style={{}}src={item.image[0]} alt="hehe" />
        </div>
        <div>
          <h3>{item.title}</h3>
        </div>
        <div>
          {" "}
          <h5> {item.size} </h5>
        </div>
        <div>
          <h3> {item.price}Pkr</h3>
        </div>
        <div>
          <h3> {item.quantity} </h3>
        </div>
      </div>
      <div className="addsub">
        <button>➖</button>
        <button>➕</button>
      </div>
    </div>
);
};
export const Checkout = () => {
  return (
    <div className="summary-section">
      <div id="sum">
        <div className="summary-section-heading">Order Summary</div>
        <div className="checkout-summary">
          <div className="checkout-summary-label">
            Subtotal
            <div className="coupon">
              <input type="text" placeholder="Enter Voucher Here" />{" "}
              <button>Apply</button>
            </div>
          </div>
          <div className="total__price">
            <div>Total</div> <div>0 PKR</div>
          </div>

          <div>
            <button className="proceed">Proceed to CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};
