import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import {ClimbingBoxLoader} from 'react-spinners'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailContainer = () =>{
    
    const {id}= useParams()

    const [character, setCharacter] = useState(null)

    useEffect(() => {

        const getCharacterDetail = async () => {

            const docRef = doc(db, "products", id);

            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setCharacter({...docSnap.data(), id: docSnap.id})
            } else {

                console.log("No such document!");
            }
        }
        getCharacterDetail()
    }, [id])
return(
    ( character ? <ItemDetail character={character}/> : <ClimbingBoxLoader/>)
)
}
export default ItemDetailContainer;