import React from 'react'
import { usePaginationContext } from '../context/PaginationContext';

function Categories(props) {
    const {categories,setCurrCategory} = props
    const {setPageNum} = usePaginationContext();
  return (
    <>
     <button className='category_option' 
     onClick={()=>{
      setCurrCategory("All Categories");
      setPageNum(1);
     }}
     >All Categories</button>
        {categories.map((category)=>{
            return <button className='category_option' key={category.id} onClick={()=>{
              setCurrCategory(category);
              setPageNum(1);
            }}>{category}</button>
        })}
    </>
  )
}

export default Categories