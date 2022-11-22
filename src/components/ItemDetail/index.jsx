import React, { useContext } from "react"
import './style.scss'
import ItemCount from '../ItemCount/index'
import { useState } from "react";
import { Theme } from '../../contexts/Theme';
import {Shop} from '../../contexts/Shop';

const ItemDetail = ({character}) =>{
    
    const {addProduct}= useContext(Shop)

    const [quantityItemDeatil, setQuantityItemDeatil] = useState(0)

    const confirmPurchase = (quantity)=>{
        addProduct({...character, quantity})
        setQuantityItemDeatil(quantity);
    }

    const {themeColor} = useContext(Theme)

    return(
    <div className={themeColor ==='light' ? 'card-detail-ligth' : 'card-detail-dark2'}>
    <img src={character.image} alt="character"/>
        <p key={character.id}> Name: {character.name}
        <br/> Stock : 10
        <br/>Status: {character.status} 
        <br/>Species: {character.species}
        <br/>NFT Price: ${character.price}
        <br/>
        <div className="texts">
        {quantityItemDeatil ? 
        
        <button className="boton-agregar">Go Cart</button>
        :
        <ItemCount onAdd={confirmPurchase} initial={1} stock={10}
        />}
        </div>
        </p>
    </div>
    )
}


export default ItemDetail