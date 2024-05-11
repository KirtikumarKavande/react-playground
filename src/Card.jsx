import React from 'react'

const Card = (props) => {
console.log(props)
  return (
    <div className='w-32 h-32 border border-red-400'>
        {props.name}
    </div>
  )
}

export default Card