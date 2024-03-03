import {useState} from 'react';
import {Button, Form, FormLabel} from 'react-bootstrap'
const Contact = (props) =>{
  
    const [grinput , setGrinput] = useState({name:'', email:'', tel:''})
  
    const nameHandler =(event) =>{
    event.preventDefault()
    const t = event.target.value
    setGrinput({...grinput, name: t})
  }
  
  const emailHandler = (event) =>{
    event.preventDefault()
    const t = event.target.value;
    setGrinput({...grinput , email:t})
  }

  const phoneHandler = (event) =>{
  event.preventDefault()
  const t =  event.target.value;
  setGrinput({...grinput, tel:t})
  }

  const submitHandler = (event) =>{
 event.preventDefault()
 submitting(grinput)
  }


  async function submitting(grinput){
    const response = await fetch('https://ajay-singh-f6aa8-default-rtdb.firebaseio.com/contactdetails.json',{
       method:'POST',
       headers:{
        'Contect-Type' : 'application/json'
       },
       body:JSON.stringify(grinput) 
    })
   const data = await response.json()
   console.log(data+ 'submitted')
   alert('soon will contact')
   setGrinput({name:'',email:'',tel:''}) 
  }
   
  
  return <div>
   <Form onSubmit={submitHandler}>
     <FormLabel>
        Name
     </FormLabel>
     <input type='text' onChange={nameHandler} id='name' value={grinput.name} required></input>
     <FormLabel>
        Email
     </FormLabel>
     <input type='text' onChange={emailHandler} id='email' value={grinput.email} required></input>
     <FormLabel>
        Phone no.
     </FormLabel>
     <input type='tel' onChange={phoneHandler} id='phone' value={grinput.tel} required></input>
     <Button type='submit'>Submit</Button>
   </Form>
  </div>
}

export default Contact;