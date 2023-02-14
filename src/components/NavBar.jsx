import CartWidget from './CartWidget'

function NavBar() {
  return (
    <div>
      <h4>El Galpon de Nino</h4>
      <ul>
        <button>Home</button>
        <button>Productos</button>
        <button>Nosotros</button>
        <button>Contacto</button>
      </ul>
      <CartWidget/>
    </div>
  );
}

export default NavBar;
