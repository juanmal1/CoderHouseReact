import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'

//Card
const Item = ({product}) => {

  const navigate = useNavigate()

  const navigateDetail = ()=>{
    navigate(`/detail/${product.id}`)
  }
  return (
    <div className='card' onClick={navigateDetail}>
      <img src={product.image} alt="character"/>
      <p key={product.id}> Name: {product.name}
      <br/> Stock : 10</p>
    </div>
  )
}

export default Item