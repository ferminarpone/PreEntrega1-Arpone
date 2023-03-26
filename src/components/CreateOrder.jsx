import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { CarritoContext } from "../context/CartContext";
import { useContext } from "react";

const CreateOrder = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);
  const { cart, totalAmount } = useContext(CarritoContext);

  const dBase = getFirestore();
  const orderCollection = collection(dBase, "orden");
  const order = {
    name,
    email,
    productos: cart.map((item) => ({
      id: item.id,
      nombre: item.nombre,
      precio: `€${item.precio}`,
      cantidad: item.quantity,
    })),
    total: `€ ${totalAmount()}`,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
  };

  return (
    <div className="orden">
      <h1>CreateOrder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre y apellido"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Correo"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit"> Send </button>
      </form>
      {orderId != null ? <p>Nro. de orden: {orderId}</p> : ""}
    </div>
  );
};

export default CreateOrder;
