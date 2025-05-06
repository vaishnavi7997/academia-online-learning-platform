import React from 'react'
import "./price.css";
import Back from "../common/heading/back/Back"
import PriceCard from './PriceCard'
import Faq from './Faq';

const Price = () => {
  return (
    <>
    <Back title='Choose The Right Plan' />
    <section className='price-section'>
           <div className="container price-grid ">
            < PriceCard />
           </div>
    </section>
    <Faq />
    </>
  )
}

export default Price
