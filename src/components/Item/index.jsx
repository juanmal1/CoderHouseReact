import React from 'react'

//Card
const Item = ({product}) => {
  return (
    <div>
      <img src={product.image} alt="character"/>
      <p key={product.id}>{product.name}</p>
    </div>
  )
}

export default Item