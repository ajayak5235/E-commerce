import { useState } from "react";
import { useParams } from "react-router-dom";


const Movie=(props)=>{

    const [d,setD]=useState({t:'',p:0,i:''})
    const {id}=useParams()
let data=null;
    async function fetching(){
        try{
            const res=await fetch(`https://react-http-76942-default-rtdb.firebaseio.com/movies/${id}.json`)

        data=await res.json();
        console.log(data)
        setD({t:data.title,p:data.price,i:data.imageUrl})
        }catch(err){
            console.log(err)
        }
        

        

    }

    fetching()
    return <>
    <div style={{marginTop:'20px',textAlign:'center'}}>
        <h3>Movies details</h3>
        <div> {d.t}</div>
        <div> {d.p}</div>
        <div> {d.i}</div>
        <div> {id}</div>
        <img src='https://prasadyash2411.github.io/ecom-website/img/Album%203.png'/>
        </div>
    </>
}


export default Movie;