import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import {ClimbingBoxLoader} from 'react-spinners'

const ItemDetailContainer = () =>{
    
    const {id}= useParams()

    const [character, setCharacter] = useState(null)

    useEffect(()=> {
        
        const getCharacterDetail = async ()=>{
            const response = await fetch (`https://rickandmortyapi.com/api/character/${id}`)
            const character = await response.json ();
            setCharacter(character)
        }

        getCharacterDetail()
    }, [id])
return(
    ( character ? <ItemDetail character={character}/> : <ClimbingBoxLoader/>)
)
}
export default ItemDetailContainer;