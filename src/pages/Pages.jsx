import React from 'react'
import Home from '../component/mainpage/Home'
import FlashDeals from '../component/flashDeals/FlashDeals'
import TopCateg from '../component/top/TopCateg'
import NewArrivals from '../component/newarrival/NewArrivals'
import Discount from '../component/discount/Discount'
import Shop from '../component/shops/Shop'
import Annocument from '../component/annocument/Annocument'
import Wrapper from '../component/wrapper/Wrapper'

const Pages = ({productItems, addToCart, cartItem, shopItems}) => {
  return (
    <>
      <Home cartItem={cartItem}/>
      <FlashDeals productItems={productItems} addToCart={addToCart}/>
      <TopCateg />
      <NewArrivals />
      <Discount />
      <Shop addToCart={addToCart} shopItems={shopItems}/>
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Pages