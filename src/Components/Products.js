import { Card } from "react-bootstrap"


const Product=(props)=>{

    return (
        
            
               
                <Card>
                    {props.title} , {props.price}
                </Card>
                
               
    )
}

export default Product