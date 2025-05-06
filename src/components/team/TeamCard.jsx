import React from 'react'
import "./team.css";
import { team } from '../../dummydata'


const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className='items shadow'>
            <div className='img'>
            <img src={val.cover} alt={val.name} />
                <div className='overlay'>
                    <i className='fab fa-facebook-f icon'></i>
                    <i className='fab fa-instagram icon'></i>
                    <i className='fab fa-twitter icon'></i>
                    <i className='fab fa-youtube icon'></i>        
                </div>
            </div>
            <div className='details'>
                 <h2>{val.name}</h2>
                 <p>{val.position}</p>
            </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
