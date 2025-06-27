import React from 'react'
import ProductList from '../components/ProductList'
import { useSelector } from 'react-redux'

function Cart() {
  const productList = useSelector((store)=>(store.cartReducer.cartProducts));
  const quantity = useSelector((store)=>(store.cartReducer.cartQuantity));
  return (
    <>
    <h2 className="user-title">Cart</h2>
    <h2 className="cart-title">Total Items: {quantity}</h2>
    {quantity > 0 && <ProductList filteredArr={productList} />}
    </>
  )
}

export default Cart