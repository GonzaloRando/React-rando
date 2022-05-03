import Item from "../Item";

const ItemList = ({ products }) => {
    return (
        <div>
            {products.map((product => {
                return (
                    <Item 
                    key={product.id} 
                    name={product.name} 
                    price={product.price}
                    image={product.image}
                    stock={product.stock}
                    quantity={product.quantity}
                    />
                )
            }))} 
        </div>
    )
}
export default ItemList;
