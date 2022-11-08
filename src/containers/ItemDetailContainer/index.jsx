import React from 'react'
import { useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () =>{
    
    useEffect(()=> {
        ( async ()=> {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                console.log(response);
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])
return(
    <ItemDetail/>
)
}
export default ItemDetailContainer;