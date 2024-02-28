import { useState } from "react"
import classes from './ProductArr.module.css'
const ProductArr = () =>{
    const [data] = useState([
        

            {
            
            title: 'Colors',
            
            price: 100,
            
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            
            },
            
            {
            
            title: 'Black and white Colors',
            
            price: 50,
            
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            
            },
            
            {
            
            title: 'Yellow and Black Colors',
            
            price: 70,
            
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            
            },
            
            {
            
            title: 'Blue Color',
            
            price: 100,
            
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
            
            }
            
            
            
            
    ])
    return (
        
         <div className={classes.product}>
         {
            data.map((product , index) =>{
                return (
                <div key={index}>
                    <h1>{product.title}</h1>
                    <img src={product.imageUrl} alt='img'></img>
                    <p>${product.price}</p>

                </div>)
            })
         }
        </div>
    
       
    )
}

export default ProductArr;