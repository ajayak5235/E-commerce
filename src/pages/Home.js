import { Button } from "react-bootstrap"

const Home =  () =>{
    return <>
    <div style={{height:'10rem' , backgroundColor:'grey' , textAlign:'center' , fontSize:'60px' , color:'white'}}>
        <div style={{textAlign:'center' , margin:'20px' , fontSize:'50px',fontWeight:'500'}} className="'d-flex flex-column flex-sm-row align-items-center"> The Generics </div>
            <h3 className="border-3" style={{textAlign:'center'}}>Get our Latest Album</h3>
       
    </div>
     
    <div style={{textAlign:'center'}}>
        <h3>TOURS</h3>
  
    <div style={{margin:'auto',textAlign:'center'}} className="d-flex justify-content-center">
        <table className='table table-striped table-hover' style={{width:'50rem'}}>
            <tr>
                <td style={{fontSize:'20px'}}>JULY 16</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <Button>BUY TICKETS</Button>
            </tr>
            <hr></hr>
            <tr>
                <td style={{fontSize:'20px'}}>JULY 16</td>
                <td>TORONTO,ON</td>
                <td>BUDWEISER STAGE</td>
                <Button>BUY TICKETS</Button>
            </tr>
            <hr></hr>
            <tr>
                <td style={{fontSize:'20px'}}>JULY 16</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <Button>BUY TICKETS</Button>
            </tr>
            <hr></hr>
            <tr>
                <td style={{fontSize:'20px'}}>JULY 16</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <Button>BUY TICKETS</Button>
            </tr>

        </table>
    </div>
    </div>
    <div style={{ height: '8rem', backgroundColor: 'grey', fontSize: '50px', textAlign: 'center', color: 'white' }} className="d-flex flex-column flex-sm-row align-items-center">
            <p className="mx-3 p-0">The Generics</p>
            
        </div>
    </>
}
export default Home;