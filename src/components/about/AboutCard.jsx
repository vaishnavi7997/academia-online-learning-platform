import React from 'react';
import img2 from '../../assets/img4.jpg';
import Title from "../title/Title";
import { homeAbout } from '../../dummydata';
import AWrapper from './AWrapper';
import "./about.css";

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
            <div className="left row">
            <img src={img2} alt='About' />     
           </div>
        
        <div className='right row'>
            <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'> {homeAbout.map((val) => (
                <div className='item flexSB'>
                    <div className='img'>
                        <img src={val.cover} alt='' className='imgcover' />
                    </div>
                    <div className="text">
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
        </div>
      </section>
      <AWrapper />
    </>
  )
}

export default AboutCard
