import { Card } from 'react-bootstrap';
import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({name, price, image, detail, stock}) => {
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
<Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
    <Card.Text>{detail}</Card.Text>
</Card.Body>
    <ItemCount initial={0} stock={stock} onAdd={() => {}} />
</Card>
}
export default ItemDetail;