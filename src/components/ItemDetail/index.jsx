import React from "react"
import './style.scss'

const ItemDetail = ({character}) =>{
    console.log(character);
    

    return(
    <div className="item-detail">
    <img src={character.image} alt="character"/>
        <p key={character.id}> Name: {character.name}
        <br/> Stock : 10
        <br/>Status: {character.status} 
        <br/>Species: {character.species}
        <br/>NFT Price: 100 U$D
        <br/><button className="boton-agregar">AGREGAR</button>
        </p>
    </div>
    )
}


export default ItemDetail