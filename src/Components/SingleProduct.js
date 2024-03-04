
import { Button, Container, Nav, Navbar, Card, Col, Table, Row, CardHeader } from 'react-bootstrap';
import cartContext from '../store/cart-context';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const SingleProduct =(props)=>{


    const crtContext=useContext(cartContext);

  const addToCart=(event)=>{
    event.preventDefault()
    let p={...props.item}
    crtContext.addToCart({...p})
    // console.log('adding ',p)
  }

    const deleteItem= (event)=>{
      event.preventDefault()
      // console.log(props.item.id)
      props.deleteItem(props.item)
    }

    return <><Col md='4' className='d-flex  align-items-center justify-content-center'  key={Math.random().toString()}>
              
              <Card className='border-0 ' style={{ width: '18rem' }} key={'1'+Math.random().toString()}>
                <Card.Header className='p-0 d-flex flex-column justify-content-center align-items-center bg-white mb-3'>
                <Card.Title><NavLink to={`/movies/${props.item.id}`}>{props.item.title}</NavLink></Card.Title>
                <Card.Img variant="top" src={props.item.imageUrl} />

                </Card.Header>
                <Card.Body className='d-flex justify-content-between'>
                  
                  <Card.Text>
                    
                  ${props.item.price}
                  </Card.Text>
                  
                  
                </Card.Body>
                <Card.Footer>
                <Button variant="primary" onClick={deleteItem}>delete</Button>
                <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
                </Card.Footer>
              </Card>
             
            </Col></>


}

export default SingleProduct