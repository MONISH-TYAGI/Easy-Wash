import React, { createContext, useState } from 'react'

export const CartContext = createContext();
export const  CartContextProvider=(props)=> {
  const [BillId,setBillId]=useState("123");
 
  const [BigObj,setObj]=useState([]);
  const [totalItems,setItems]=useState(0);
    const [totalAmt,setAmt]=useState(0);
  return (
    <CartContext.Provider value={{setObj,BigObj,BillId,setBillId,totalItems,setItems,totalAmt,setAmt}}>
    {props.children}
</CartContext.Provider>
  )
}

// export default CartContextProvider
