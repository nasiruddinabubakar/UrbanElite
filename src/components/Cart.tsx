import { Heading } from "./Heading";

export default function () {
  return (
    <div className="cart__container">
      <Heading heading="Cart Items" />
      <div className="cart__shell">
        <div className="cart">
          <div className="added__products">
            <button>❌</button>
            <div className="inner__products">
              <div id="pro--img">
                <img src="/products/f1.jpg" alt="hehe" />
              </div>
              <div>
                <h3> Miami T-shirt</h3>
              </div>
              <div>
                {" "}
                <h5> XS </h5>
              </div>
              <div>
                <h3> 132$ </h3>
              </div>
              <div>
                <h3> 2 </h3>
              </div>
            </div>
            <button>➕</button>
          </div>
          <div className="added__products">
            <button>❌</button>
            <div className="inner__products">
              <div id="pro--img">
                <img src="/products/f1.jpg" alt="hehe" />
              </div>
              <div>
                <h3> Miami T-shirt</h3>
              </div>
              <div>
                <h5> XS </h5>
              </div>
              <div>
                <h3> 132$ </h3>
              </div>
              <div>
                <h3> 2 </h3>
              </div>
            </div>
            <button>➕</button>
          </div>
          <div className="added__products">
            <button>❌</button>
            <div className="inner__products">
              <div id="pro--img">
                <img src="/products/f1.jpg" alt="hehe" />
              </div>
              <div>
                <h3> Miami T-shirt</h3>
              </div>
              <div>
                <h5> XS </h5>
              </div>
              <div>
                <h3> 132$ </h3>
              </div>
              <div>
                <h3> 2 </h3>
              </div>
            </div>
            <button>➕</button>
          </div>
          <div className="added__products">
            <button>❌</button>
            <div className="inner__products">
              <div id="pro--img">
                <img src="/products/f1.jpg" alt="hehe" />
              </div>
              <div>
                <h3> Miami T-shirt</h3>
              </div>
              <div>
                <h5> XS </h5>
              </div>
              <div>
                <h3> 132$ </h3>
              </div>
              <div>
                <h3> 2 </h3>
              </div>
            </div>
            <button>➕</button>
          </div>
        </div>
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
      </div>
    </div>
  );
}
