import ItemList from '../../components/ItemList/ItemList';
import './item-list-container.css';
import getData from '../../services/getData';
import { useState, useEffect } from 'react';

const ItemDetailContainer = () => {
const [products, setProducts] = useState([])
useEffect(() => {
getData
.then((response) => setProducts(response))
.catch((error) => console.log("error: ", error))
}, []
)


return (
  <>
    <ItemList products={products}/>
  </>
)
}


export default ItemDetailContainer;