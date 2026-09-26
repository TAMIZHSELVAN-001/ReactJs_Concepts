import { useSelector } from "react-redux";

function Cart() {
  const count = useSelector(
    (state) => state.cart.count
  );

  return (
    <div>
      Count: {count}
    </div>
  );
}

export default Cart;