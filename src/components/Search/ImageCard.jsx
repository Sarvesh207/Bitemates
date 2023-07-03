import React from 'react'

const ImageCard = ({image}) => {
  return (
    <div>
        <img className='w-28' src={image} alt="" />
    </div>
  )
}

export default ImageCard