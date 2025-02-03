import Topbar from "./Navigationbar/Navbar";
import Item from "./Homepage/item";
import mobilePhones from "./itemList";
import { useState } from "react";
import CartComponent from "./Cart/Cartitem";

function App() {
  const [cartList, setCartList] = useState([]);
  const [navToCart, setNavToCart] = useState(false);
  function NavigateToCart() {
    setNavToCart(true);
  }
  function NavigateToHome() {
    setNavToCart(false);
  }

  const AddToCart = (item) => {
    setCartList([...cartList, item]);
    alert("Item added to cart!");
  };
  const removeFromCart = (item) => {
    setCartList((prevCartList) => {
      const updatedCart = prevCartList.filter(
        (phone) => phone.key !== item.key
      );
      console.log("Cart before removal:", prevCartList);
      console.log("Cart after removal:", updatedCart);
      return updatedCart;
    });
  };
  const showingItems = mobilePhones.map((phone) => (
    <Item
      phone={phone}
      key={phone.id}
      img1={"./assets/" + phone.images[0] + ".jpg"}
      img2={"./assets/" + phone.images[1] + ".jpg"}
      title={phone.title}
      price={phone.price}
      condition={phone.condition}
      color={phone.color}
      os={phone.os}
      brand={phone.brand}
      screenSize={phone.screenSize}
      storage={phone.storage}
      AddToCart={AddToCart}
    />
  ));
  const showCartList = cartList.map((phone) => (
    <CartComponent
      phone={phone}
      key={phone.id}
      img1={"./assets/" + phone.images[0] + ".jpg"}
      img2={"./assets/" + phone.images[1] + ".jpg"}
      title={phone.title}
      price={phone.price}
      condition={phone.condition}
      color={phone.color}
      os={phone.os}
      brand={phone.brand}
      screenSize={phone.screenSize}
      storage={phone.storage}
      removeFromCart={removeFromCart}
    />
  ));

  return (
    <div>
      <Topbar
        NavigateToCart={NavigateToCart}
        NavigateToHome={NavigateToHome}
        numberOfCartItem={cartList.length}
      />
      <div className="container-items">
        {navToCart ? showCartList : showingItems}
      </div>
    </div>
  );
}

export default App;
