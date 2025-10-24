import { useState } from "react";
import CartContainer from "./CartContainer";
import ProductsContainer from "./ProductsContainer";
import NavBar from "./NavBar";
import products from "../data/products";

export default function GroceriesAppContainer() {
  // Keep track of quantity for each product (for product cards)
  const [productQuantities, setProductQuantities] = useState(
    products.map((item) => ({ id: item.id, quantity: 0 }))
  );

  // List of items currently added to the cart
  const [cartItems, setCartItems] = useState([]);

  // Static list of all available products
  const [productList] = useState(products);

  // Increase product quantity (used in both product cards and cart)
  const addQuantity = (productId, area) => {
    if (area === "cart") {
      // Increase quantity for a cart item
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else if (area === "product") {
      // Increase quantity for a product card
      setProductQuantities((prevQuantities) =>
        prevQuantities.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
  };

  // Decrease product quantity (cannot go below 1 in cart or below 0 in product card)
  const removeQuantity = (productId, area) => {
    if (area === "cart") {
      // Decrease quantity for a cart item
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else if (area === "product") {
      // Decrease quantity for a product card
      setProductQuantities((prevQuantities) =>
        prevQuantities.map((item) =>
          item.id === productId && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  // Add selected product to the cart
  const addToCart = (productId) => {
    const chosenProduct = productList.find((p) => p.id === productId);
    const productQty = productQuantities.find((p) => p.id === productId);

    if (!chosenProduct || !productQty) return;

    // If user tries to add with quantity 0, show alert
    if (productQty.quantity === 0) {
      alert(`Please select a quantity for ${chosenProduct.productName}`);
      return;
    }

    // Check if the product already exists in the cart
    const existingItem = cartItems.find((p) => p.id === productId);

    if (existingItem) {
      // Update existing item quantity
      const updatedCart = cartItems.map((p) =>
        p.id === productId
          ? { ...p, quantity: p.quantity + productQty.quantity }
          : p
      );
      setCartItems(updatedCart);
    } else {
      // Add new product to cart
      setCartItems([
        ...cartItems,
        { ...chosenProduct, quantity: productQty.quantity },
      ]);
    }

    // Reset product card quantity after adding to cart
    setProductQuantities((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: 0 } : item
      )
    );
  };

  // Remove a single product from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      {/* Top navigation bar with username and cart icon */}
      <NavBar quantity={cartItems.length} />

      <div className="GroceriesApp-Container">
        {/* Left side: list of all products */}
        <ProductsContainer
          products={productList}
          handleAddQuantity={addQuantity}
          handleRemoveQuantity={removeQuantity}
          handleAddToCart={addToCart}
          productQuantity={productQuantities}
        />

        {/* Right side: shopping cart summary */}
        <CartContainer
          cartList={cartItems}
          handleRemoveFromCart={removeFromCart}
          handleAddQuantity={addQuantity}
          handleRemoveQuantity={removeQuantity}
          handleClearCart={clearCart}
        />
      </div>
    </div>
  );
}
