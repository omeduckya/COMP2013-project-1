import QuantityCounter from "./QuantityCounter";

export default function CartCard({
  id,
  image,
  productName,
  price,
  quantity,
  handleRemoveFromCart,
  handleAddQuantity,
  handleRemoveQuantity,
}) {
  // calculate the total price for this item
  const totalPrice = (parseFloat(price.replace("$", "")) * quantity).toFixed(2);

  return (
    <div className="CartCard">
      {/* Item image and details */}
      <div className="CartCardInfo">
        <img src={image} alt={`${productName} product`} />
        <p>{productName}</p>
        <p>{price}</p>

        {/* Use the shared QuantityCounter to change item amount */}
        <QuantityCounter
          id={id}
          quantity={quantity}
          handleAddQuantity={handleAddQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
          mode="cart"
        />
      </div>

      {/* Item total and remove button */}
      <div className="CartCardActions">
        <h3>Total: ${totalPrice}</h3>
        <button onClick={() => handleRemoveFromCart(id)}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
