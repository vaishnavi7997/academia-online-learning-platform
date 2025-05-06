 import React from 'react';
import "./Hero.css";
import Title from '../../title/Title';
const Hero = () => {
  return (
    <>
      <section className='hero'>
       <div className='container'>
         <div className='row'>
          <Title subtitle='WELCOME TO ACDAEMIA' title='Best Online Education' />
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, vero! Est repellendus architecto fuga, sunt repellat iusto atque quis. Minus odit voluptatibus debitis neque dolores delectus nihil deleniti possimus expedita.</p>
           <div className='button'>
             <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
             </button>
             <button className='primary-btn'>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
             </button>
           </div>           
         </div>
       </div>
      </section>
      <div className='marigin'></div>
    </>
  )
}

export default Hero
