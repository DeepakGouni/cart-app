import { useEffect } from "react";
import { getCartItems, updateTotal } from "./features/cart/cartSlice";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import Model from "./components/Model";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isModelOpen } = useSelector((store) => store.model);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cartItems) {
      dispatch(updateTotal());
    }
  }, [cartItems, dispatch]);
  
  useEffect(()=> {
    dispatch(getCartItems());
  }, [dispatch])

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading..</h1>
      </div>
    );
  }
  return (
    <main>
      {isModelOpen && <Model />}
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
