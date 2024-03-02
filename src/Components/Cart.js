import { Button , Card , Offcanvas} from "react-bootstrap";

import { cartElements } from "../ProductsArr/ProductArr";

const Cart = ({shows, onHide}) =>{
    return(
<>
<Offcanvas show={shows} onHide={onHide} placement={'end'} backdrop={false} scroll={true} style={{width:'30rem'}}>
<Offcanvas.Header closeButton>
    <Offcanvas.Title>Cart Item</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        {cartElements.map((item,index) =>{
            return <Card className="border-1 d-flex flex-row" style={{margin:'50px' , width:'auto', height:'10rem'}} key={Math.random().toString()}>
                <Card.Header className="p-3 d-flex flex-row justify-content-space-between align-item-centre">
                    <Card.Img variant="top" src={item.imageUrl}/>
                    <Card.Title>{item.title}</Card.Title>
                </Card.Header>
                <Card.Body className="d-flex justify-content-centre align-item-centre">
                    <Card.Text>${item.price}</Card.Text>
                    <Button variant="primary" style={{height:'2rem' , marginRight:'5px'}}>Remove Item</Button>
                </Card.Body>
            </Card>
                   
        } )}
    </Offcanvas.Body>
 <div className="d-flex flex-row justify-content-between" style={{marginLeft:'40px' , marginRight:'150px'}}>
  <h3 style={{display:'inline'}}>Total price:$</h3>
  </div>
  <Button style={{margin:'auto' ,  marginBottom:'15px', fontSize:'20px'}} >Purchase</Button>
  
</Offcanvas>
</>
    )
}
export default Cart