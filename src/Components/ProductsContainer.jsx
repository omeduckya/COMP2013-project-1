
import ProductCard from "./ProductCard";

export default function ProductsContainer({
  products,
  handleAddQuantity,
  handleRemoveQuantity,
  handleAddToCart,
  productQuantity,
}) {
  return (
    <div className="ProductsContainer">
      {/* Loop through the list of products and show each one */}
      {products.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          productName={item.productName}
          brand={item.brand}
          image={item.image}
          price={item.price}
          handleAddQuantity={handleAddQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
          handleAddToCart={handleAddToCart}
          productQuantity={productQuantity}
        />
      ))}
    </div>
  );
}
