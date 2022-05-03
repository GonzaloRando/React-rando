import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList';
import './item-list-container.css';
import getData from '../../services/getData';
import { useState, useEffect } from 'react';

const ItemListContainer = ({ greeting }) => {
const [products, setProducts] = useState([])
useEffect(() => {
getData
.then((response) => setProducts(response))
.catch((error) => console.log("error: ", error))
}, []
)


return (
  <>
    <ItemCount stock={10} initial={1} />
    <ItemList products={products}/>
  </>
)
}


export default ItemListContainer;