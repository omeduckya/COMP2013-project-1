
import QuantityCounter from "./QuantityCounter";

export default function ProductCard({
  id,
  productName,
  brand,
  image,
  price,
  productQuantity,
  handleAddQuantity,
  handleRemoveQuantity,
  handleAddToCart,
}) {
  // Find the selected product’s current quantity (or 0 if none)
  const quantity =
    productQuantity.find((item) => item.id === id)?.quantity || 0;

  return (
    <div className="ProductCard">
      {/* Product name and image */}
      <h3>{productName}</h3>
      <img src={image} alt={`${productName} product`} />

      {/* Product brand */}
      <h4>{brand}</h4>

      {/* Quantity selector (shared component) */}
      <QuantityCounter
        id={id}
        quantity={quantity}
        handleAddQuantity={handleAddQuantity}
        handleRemoveQuantity={handleRemoveQuantity}
        mode="product"
      />

      {/* Product price and add-to-cart button */}
      <h3>{price}</h3>
      <button onClick={() => handleAddToCart(id)}>Add to Cart</button>
    </div>
  );
}
