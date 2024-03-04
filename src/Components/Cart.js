import { Button, Modal, Card, Offcanvas } from "react-bootstrap"

import { cartElements } from "../ProductsArr/productsArr"
import { useContext } from "react"
import cartContext from "../store/cart-context";

const Cart = ({shows,onHide}) => {

    

    const crtContext=useContext(cartContext);
    

    const removeItem=(item)=>{
        crtContext.removeFromCart(item.id)
    }


    return (<>


      <Offcanvas show={shows} onHide={onHide} placement={"end"} backdrop= {false} scroll={true} style={{width:'30rem'}} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          {crtContext.items.map(item=>{
            return <Card className='border-0 d-flex flex-row' style={{ margin:'40px',width:'15rem' ,height: '10rem'}} key={'12'+Math.random().toString()}>
            <Card.Header className='p-5 d-flex flex-row justify-content-center align-items-center bg-white mb-3 '>
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Title>{item.title}</Card.Title>

            </Card.Header>
            <Card.Body className='d-flex justify-content-center align-items-center'>
              
              <Card.Text>
                
              ${item.price}{`  *1`}
              </Card.Text>
              <Button variant="primary" style={{height: '2rem',marginRight:'5px'}} onClick={()=>removeItem(item)}>Remove</Button>
            </Card.Body>
            
          </Card>
          })}
          
        </Offcanvas.Body>
        <div className="d-flex flex-row justify-content-between" style={{marginLeft:'40px',marginRight:'150px'}}>
        <h3 style={{display:'inline'}}>Total price:$</h3>
        <h3>{crtContext.total}</h3>
        </div>
        
        <Button style={{margin:'auto',marginBottom:'15px',fontSize:'20px'}}>Purchase</Button>
      </Offcanvas>
    </>)


}

export default Cart