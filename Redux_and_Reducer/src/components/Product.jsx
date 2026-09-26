import { useDispatch } from "react-redux";
import { increment,decrement } from "../features/Cart/CartSlice";

function Product() {
  const dispatch = useDispatch();

  const product = {
    id: 1,
    name: "MRF Cricket Bat",
    price: 2500,
  };

  const Increment = () => {
    dispatch(increment(product));
  };
  const Decrement = () => {
    dispatch(decrement(product));
  };
  return (
    <div>
        <button onClick={Increment}>
            Increase
        </button>
        <button onClick={Decrement}>
            Decrease
        </button>
    </div>
    
  );
}

export default Product;