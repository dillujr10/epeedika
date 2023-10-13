import Image from "next/image";
import React from "react";
import CartComponent from "../../../components/user/CartComponent";
import Navbar from "../../../components/others/Navbar";

const CartPage = () => {
  return (
 <>
 <Navbar/>
 <CartComponent/>
 </>
  );
};

export default CartPage;