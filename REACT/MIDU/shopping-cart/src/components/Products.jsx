import "./Products.css";
import { AddToCartIcon } from "./Icons";

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.map((product) => (
          <li key={product.id} >
            <img src={product.thumbnail} alt={product.description} />
            <div className="">
              <strong>{product.title} - ${product.price}</strong>
            </div>
            <div className="">
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
