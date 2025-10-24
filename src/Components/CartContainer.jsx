
import CartCard from "./CartCard";

export default function CartContainer({
  cartList,
  handleRemoveFromCart,
  handleAddQuantity,
  handleRemoveQuantity,
  handleClearCart,
}) {
  // Calculate total price of all cart items
  const totalPrice = cartList
    .reduce(
      (total, item) =>
        total + parseFloat(item.price.replace("$", "")) * item.quantity,
      0
    )
    .toFixed(2);

  return (
    <div className="CartContainer">
      <h2>Cart items: {cartList.length}</h2>

      {cartList.length > 0 ? (
        <>
          {/* Display each cart item */}
          {cartList.map((product) => (
            <CartCard
              key={product.id}
              id={product.id}
              image={product.image}
              productName={product.productName}
              price={product.price}
              quantity={product.quantity}
              handleRemoveFromCart={handleRemoveFromCart}
              handleAddQuantity={handleAddQuantity}
              handleRemoveQuantity={handleRemoveQuantity}
            />
          ))}

          <div className="CartListBtns">
            <button onClick={handleClearCart} className="RemoveButton">
              Empty Cart
            </button>
            <button id="BuyButton" className="CheckoutButton">
              Checkout: ${totalPrice}
            </button>
          </div>
        </>
      ) : (
        <h3>No items in cart</h3>
      )}
    </div>
  );
}

