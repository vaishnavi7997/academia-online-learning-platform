import React from 'react'

const Title = ({subtitle, title}) => {
  return (
    <div>
      <div id="heading">
        <h3>{subtitle}</h3>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default Title;
