import React from 'react';
import { CartState } from '../Context/Context';
import Filter from './Filter';
import SingleProduct from './SingleProduct';
import './Style.css';

const Home = () => {

  const {
    state:{products},
    productState:{byStock,byFastDelivery,byRating,sort,searchQuery}
  } = CartState();

  const transformProducts = ()=>{
    let sortedProducts = products;

    if(sort){
      sortedProducts = sortedProducts.sort((a,b)=>{
        return sort === "lowToHigh" ? a.price - b.price : b.price - a.price ;
      })
    }

    if(!byStock){
      sortedProducts = sortedProducts.filter((prod)=> prod.inStock)
    }
    
    if(byFastDelivery){
       sortedProducts = sortedProducts.filter((prod)=> prod.fastDelivery)
    }

    if(byRating){
      sortedProducts = sortedProducts.filter((prod)=>prod.ratings >= byRating)
    }

    if(searchQuery){
      sortedProducts = sortedProducts.filter((prod)=>
      prod.name.toLowerCase().includes(searchQuery)
      )
    }

    return sortedProducts;
  }
  transformProducts();

  return (
    <div className='home'>
      <Filter />
      <div className='productContainer'>
        {transformProducts().map((prod)=>{
          return <SingleProduct prod={prod} key={prod.id} />
        })}
      </div>

    </div>
  )
}

export default Home;