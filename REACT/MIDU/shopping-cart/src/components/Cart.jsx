import "./Cart.css";
import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";

export function Cart() {
  const cartCheckBoxID = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxID}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxID} hidden type="checkbox" />

      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              alt=""
            />
            <div>
              <strong>IPHONE</strong> - $123
            </div>

            <footer>
              <small>QTY: 1</small>
              <button> + </button>
              <button> - </button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
