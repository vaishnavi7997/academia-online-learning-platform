import React from 'react'
import Back from '../common/heading/back/Back'
import TeamCard from "../team/TeamCard"

const Team = () => {
  return (
    <>
    <Back title='Team' />
      <section className='team padding'>
         <div className='container grid'>
            <TeamCard />
         </div>
      </section>
    </>
  )
}

export default Team
