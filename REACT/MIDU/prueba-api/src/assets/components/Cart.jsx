export default function Cart({ products }) {
  return (
    <div className="">
      <span className="text-white">ITEMS {products.length || 0}</span>

      <nav>
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <div key={product.id} className="flex">
                <h2 className="text-orange-300">{product.title}</h2>
                <h4 className="text-orange-300">Cantidad : {product.quantity}</h4>
              </div>
            );
          })
        ) : (
          <span className="text-white"> No hay productos a comprar </span>
        )}
      </nav>
    </div>
  );
}
