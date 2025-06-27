import React, { useEffect, useState } from 'react'
import { FaArrowCircleUp,FaArrowCircleDown } from "react-icons/fa";
import ProductDetails from '../components/ProductDetails';
import ProductList from '../components/ProductList';
import Categories from '../components/Categories';
import basicOps from '../utility/basicOps';
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import { usePaginationContext } from '../context/PaginationContext';


function Home() {
    //state - term with which you want to filter the productsList
    const [searchTerm,setSearchTerm] = useState("");
    //single source of truth for all the products
    const [products, setProducts] = useState([]);
    //sort:0, increasing order means 1, desc means -1
    const [sortDir,setSortDir] = useState(0);
    // all the categories of the products
    const [categories, setCategories] = useState([]);
    //current category will be stored for grouping the results
    const [currCategory,setCurrCategory] = useState("All Categories")

    const {pageSize,pageNum,setPageNum,setPageSize}= usePaginationContext();

    //this is used to fetch the products
    useEffect(()=>{
            (async function () {
                const resp = await fetch(`https://fakestoreapi.com/products`)
                const productData = await resp.json();
                
                setProducts(productData);
        })()
},[]);

//fetch the categories -> api -> dynamic || used to fetch the categories 
useEffect(()=>{
    (async function(){
        const resp = await fetch('https://fakestoreapi.com/products/categories');
        const categoriesData = await resp.json();
        setCategories(categoriesData);
    })();
 }, []);
 
 
const object=basicOps(products,searchTerm,sortDir,currCategory,pageNum,pageSize);
const filteredArr = object.filteredArr;
const totalPages = object.totalPages;
  //console.log(pageNum);
  return (
   <>
   <header className='nav_wrapper'>
    <div className='search_sortWrapper'>
    <input className='search_input' type='text'
    value={searchTerm}
    onChange={(e)=>{
        setSearchTerm(e.target.value);
        setPageNum(1);
    }} />

    <div className="icons_container">
       <FaArrowCircleUp fontSize="large" className='icon1' onClick={()=>{setSortDir(1); setPageNum(1);}} />
       <FaArrowCircleDown fontSize="large" onClick={()=>{setSortDir(-1); setPageNum(1);}} />
    </div>
    </div>

    <div className="categories_wrapper">
       <Categories categories={categories} setCurrCategory={setCurrCategory} ></Categories>
    </div>

   </header>

   <main className='product_wrapper'>
    <ProductList filteredArr={filteredArr}></ProductList>
   </main>
   {/**pagination */}
   <div className="pagination">
    <button onClick={()=>setPageNum(pageNum-1)} disabled={pageNum==1 ? true : false}>
        <FaAngleLeft fontSize="large"/>
    </button>
    <div className='pagenum'>{pageNum}</div>
    
    <button onClick={() => setPageNum(pageNum + 1)} disabled={pageNum === totalPages }>
        <FaAngleRight fontSize="large"/>
    </button>
   </div>
   </>
  )
}

export default Home

/**
 *  
 */