import React from "react";
import "./CheckOut.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStatevalue } from "./StateProvider";
import Subtotal from "./Subtotal";

function CheckOut() {
  const [{ basket }, dispatch] = useStatevalue();
  return (
    <div className="Checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="CheckOut__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default CheckOut;
