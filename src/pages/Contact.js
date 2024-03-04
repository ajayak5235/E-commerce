import { useState } from "react";
import { Form, FormLabel,Button } from "react-bootstrap";

const Contact =(props)=>{

    const [grinput,setGrinput]=useState({name:'',email:'',tel:''})


    const nameHandler=(event)=>{
        event.preventDefault()
        // console.log(event.target.value);
        const t=event.target.value
        setGrinput({...grinput,name:t})
    }

    const emailHandler=(event)=>{
        event.preventDefault()
        const t=event.target.value
        setGrinput({...grinput,email:t})

    }
    const phonelHandler=(event)=>{
        event.preventDefault()
        const t=event.target.value
        setGrinput({...grinput,tel:t})
    }

    const submitHandler=(event)=>{
        event.preventDefault()
        
        console.log(grinput,' grinput')
        submitting(grinput)
    }
    async function submitting(grinput){
        const reponse = await fetch('https://react-http-76942-default-rtdb.firebaseio.com/contactdetails.json',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
              },
            body:JSON.stringify(grinput)
        })

        const data =await reponse.json()

        console.log(data+' submitted')
        alert('soon will contact you')
        setGrinput({name:'',email:'',tel:''})
    }

    return <div style={{margin:'auto' , border:'5px',width:'20rem'}} >

<Form onSubmit={submitHandler} style={{margin:'auto',textAlign:"center" ,padding:'5px',width:'20rem'}} className="d-flex flex-column">
        <FormLabel>
            Name
        </FormLabel>
        <input type="text" onChange={nameHandler} id="name" value={grinput.name} required></input>
        <FormLabel>
            Email
        </FormLabel>
        <input type="email" onChange={emailHandler} value={grinput.email} id="email" required></input>
        <FormLabel>
            Phone no.
        </FormLabel>
        <input type="tel" onChange={phonelHandler} id="phone" value={grinput.tel} required></input>
        <Button type='submit' className="mx-5 my-2">Add Movies</Button>
    </Form>
    </div>
}

export default Contact