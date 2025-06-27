import React from 'react'
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { action } from '../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function ProductList(props) {
  const { filteredArr } = props;
  const cartProducts = useSelector((store) => store.cartReducer.cartProducts);

  const dispatch = useDispatch();

  // Fix: Wrap handlers in arrow functions to avoid immediate invocation
  const handleAddProduct = (product) => {
    dispatch(action.addToCart(product));
  };

  const handleRemoveProduct = (product) => {
    dispatch(action.deleteFromCart(product));
  };

  // Helper to get quantity for a product
  const getProductQuantity = (id) => {
    const found = cartProducts.find((prod) => prod.id === id);
    return found ? found.indQuantity : 0;
  };

  return (
    <>
      {filteredArr.length === 0 ? (
        <h1>Loading ....</h1>
      ) : (
        <>
          {filteredArr.map((item) => (
            <div className='product' key={item.id}>
              <img src={item.image} alt='product_img' className='product_img' />
              <div className='product_meta'>
                <p className='product_title'>{item.title}</p>
                <p className='price'>{item.price}</p>
              </div>
              <div className="add_to_cart_container">
                {/* Fix: onClick should be a function, not the result of a function */}
                <CiSquareMinus
                  fontSize={"large"}
                  onClick={() => handleRemoveProduct(item)}
                  className="cart-icon"
                  title="Remove from cart"
                />
                <div className="currentCartCount">
                  {/* Show quantity directly */}
                  <p>{getProductQuantity(item.id)}</p>
                </div>
                <CiSquarePlus
                  fontSize={"large"}
                  onClick={() => handleAddProduct(item)}
                  className="cart-icon"
                  title="Add to cart"
                />
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

// Removed PrintCount component as quantity is now handled inline

export default ProductList