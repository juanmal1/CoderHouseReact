import React from "react"

const ItemDetail = ({product}) =>{
    
    

    return(
        <div>
        <h1>detalle del personaje</h1>
        <p key={product.id}>{product.nome},
        {product.status},{product.species},
        {product.type},{product.gender},
        {product.origin}</p>
        </div>
    )
}


export default ItemDetail