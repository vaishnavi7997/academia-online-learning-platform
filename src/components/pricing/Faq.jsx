import React, { useState } from 'react';
import Title from '../title/Title';
import { Faq as faqData } from '../../dummydata';

const Faq = () => {
  const [click, setClick] = useState(null); 

  const toggle = (index) => {
    if (click === index) {
      setClick(null);
    } else {
      setClick(index);
    }
  };

  return (
    <>
      <Title subtitle='FAQS' title='Frequently Asked Questions' />
      <section className='faq'>
        <div className='container'>
          {faqData.map((val, index) => (
            <div className='box' key={index}>
              <button className='accordion' onClick={() => toggle(index)}>
                <h2>{val.title}</h2>
                <span>
                  {click === index ? (
                    <i className='fa fa-chevron-down'></i>
                  ) : (
                    <i className='fa fa-chevron-right'></i>
                  )}
                </span>
              </button>
              {click === index && (
                <div className='text'>
                  <p>{val.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
