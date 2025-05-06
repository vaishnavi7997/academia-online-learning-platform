import React from 'react'
import Title from '../title/Title'
import PriceCard from '../pricing/PriceCard'

const Hprice = () => {
  return (
    <>
   <section className='hprice padding'>
   <Title subtitle='our pricing' title='pricing & packages' />

      <div className=' container grid2 '>
        <PriceCard />
      </div>
     </section>
    </>
  )
}

export default Hprice
