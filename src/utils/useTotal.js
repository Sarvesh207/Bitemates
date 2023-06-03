import { useSelector } from "react-redux";
const cartItems = useSelector((store) => store.cart.items);

const useTotal = () => {
  
  let totalPrice = 0;

  cartItems.forEach((item) => {
   
    totalPrice += item.card.info.price 
  });

  return totalPrice;
};

export default useTotal;

