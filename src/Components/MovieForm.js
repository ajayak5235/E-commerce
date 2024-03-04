import { useState } from "react";
import { Form, FormLabel,Button } from "react-bootstrap";


const MovieForm =(props)=>{

    const [grinput,setGrinput]=useState({title:'',price:0,url:''})


    const titleHandler=(event)=>{
        event.preventDefault()
        // console.log(event.target.value);
        const t=event.target.value
        setGrinput({...grinput,title:t})
    }

    const priceHandler=(event)=>{
        event.preventDefault()
        const t=event.target.value
        setGrinput({...grinput,price:t})

    }
    const urlHandler=(event)=>{
        event.preventDefault()
        const t=event.target.value
        setGrinput({...grinput,url:t})
    }

    const submitHandler=(event)=>{
        event.preventDefault()
        // if(grinput.url.trim().length===0 || grinput.price<0 || grinput.title.trim().length===0){
        //     alert('please fill all field with valid value')
        //     return;
        // }
        console.log(grinput,' grinput')
        props.addMovieHandler({...grinput,imageUrl:grinput.url})
    }
    return <Form onSubmit={submitHandler} style={{margin:'auto',textAlign:"center" ,padding:'5px',width:'20rem'}} className="d-flex flex-column">
        <FormLabel>
            Title
        </FormLabel>
        <input type="text" onChange={titleHandler} id="title" required></input>
        <FormLabel>
            Price
        </FormLabel>
        <input type="number" onChange={priceHandler} id="price" required></input>
        <FormLabel>
            imageUrl
        </FormLabel>
        <input type="text" onChange={urlHandler} id="url" required></input>
        <Button type='submit' className="mx-5 my-2">Add Movies</Button>
    </Form>
}

export default MovieForm;