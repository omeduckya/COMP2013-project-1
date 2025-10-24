

export default function QuantityCounter({
    id,
    quantity,
    handleAddQuantity,
    handleRemoveQuantity,
    mode,
  }) {
    return (
      <div className="ProductQuantityDiv">
        {/* Button to decrease quantity */}
        <button onClick={() => handleRemoveQuantity(id, mode)}>-</button>
  
        {/* Display the current quantity number */}
        <p>{quantity}</p>
  
        {/* Button to increase quantity */}
        <button onClick={() => handleAddQuantity(id, mode)}>+</button>
      </div>
    );
  }
  