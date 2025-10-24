
export default function NavBar({ quantity }) {
  return (
    <nav className="NavBar">
      <div className="NavDiv NavUser">
        <h3>Hello, username</h3>
      </div>

      <div className="NavDiv NavTitle">
        <h2>GROCERY APP</h2>
      </div>

      <div className="NavDiv NavCart">
        <img
          src={quantity > 0 ? "/cart-full.png" : "/cart-empty.png"}
          alt="Shopping cart icon"
        />
      </div>
    </nav>
  );
}
