import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../contexts/Shop";
import { Theme } from "../../contexts/Theme";
import ItemCount from "../ItemCount";
import "./style.scss";

const ItemDetail = ({ character }) => {

    const {addProduct} = useContext(Shop);
    const {themeColor} = useContext(Theme)

    const [quantityItemDetail, setQuantityItemDetail] = useState(0);

    const navigate = useNavigate();

    const confirmPurchase = (quantity) => {
        addProduct({...character, quantity})
        setQuantityItemDetail(quantity);
    };

    const handleNavigate = () => {
      navigate('/cart')
    }

    return(
      <div className={themeColor ==='light' ? 'card-detail-ligth' : 'card-detail-dark2'}>
      <img src={character.image} alt="character"/>
          <p key={character.id}> Name: {character.name}
          <br/> Stock : {character.quantity}
          <br/>Status: {character.status} 
          <br/>Species: {character.species}
          <br/>NFT Price: ${character.price}
          <br/>
          <div className="texts">
          {quantityItemDetail ? 
          
          <button className="boton-agregar">Go Cart</button>
          :
          <ItemCount onAdd={confirmPurchase} initial={1} stock={10}
          />}
          </div>
          </p>
      </div>
      )
  }

export default ItemDetail;
