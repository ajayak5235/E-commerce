import {useState} from 'react';
import { Button, Form } from 'react-bootstrap';

const MovieForm = () => {
    const [grinput, setGrinput] = useState({title:'' , price:0,url:''})
    
    const titleHandler=(event) =>{
        event.preventDefault()
        const t = event.target.value;
        setGrinput({...grinput,title:t})
    }

  const priceHandler=(event)=>{
    event.preventDefault();
    const t = event.target.value;
    setGrinput({...grinput, price:t})  
}
const urlHandler=(event)=>{
    event.preventDefault()
    const t = event.target.value;
    setGrinput({...grinput, url:t})
}
return <Form onSubmit={submitHandler}>
    <FormLabel>
        Title
    </FormLabel>
    <input type='text' onChange={titleHandler} id='title' required></input>
    <FormLabel>
        Price
    </FormLabel>
    <input type='number' onChange={priceHandler} id='price' required></input>
    <FormLabel>
        imageUrl
    </FormLabel>
    <input type='text' onChange={urlHandler} id='url' required></input>
    <Button type='submit' className='mx-5 my-2'>Add Movies</Button>
    </Form>

}
export default MovieForm;