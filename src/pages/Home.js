

const Home = (props) => {
    return <>

        <div style={{ height: '30rem', backgroundColor: 'gray', fontSize: '60px', textAlign: 'center', color: 'white' }}>
        {/* <div style={{  fontSize: '160px', textAlign: 'center', color: 'white' }}>The </div>
            <div style={{  fontSize: '160px', textAlign: 'center', color: 'white' }}> Generics</div> */}
            {/* <h2 style={{ textAlign: 'center', margin: '20px' }}>The Generics</h2> */}
            <div style={{ textAlign: 'center', margin: '20px',fontSize:'100px',fontWeight:'500'}} className="d-flex flex-xl-row justify-content-center">The Generics</div>

        <h4 className="border-3" style={{textAlign:'center'}}>Get our Latest Album</h4>
        </div>
        
        <div style={{fontSize:'30px',textAlign:'center'}}>
            <h3>TOURS</h3>
            <div style={{margin:'auto',textAlign:'center'}} className="d-flex justify-content-center">
            <table className="table table-striped table-hover" style={{width:'30rem'}} >
                <tr> 
                    <td>JULY 16</td>
                    <td>Location </td>
                    <td>Name</td>
                    <button>Buy</button>
                </tr>
                <hr></hr>
                <tr> 
                    <td>JULY 16</td>
                    <td>Location </td>
                    <td>Name</td>
                    <button>Buy</button>
                </tr>
                <hr></hr>
                <tr> 
                    <td>JULY 16</td>
                    <td>Location </td>
                    <td>Name</td>
                    <button>Buy</button>
                </tr>
                <hr></hr>
                <tr> 
                    <td>JULY 16</td>
                    <td>Location </td>
                    <td>Name</td>
                    <button>Buy</button>
                </tr>
                <hr></hr>
              
            </table>
            </div>
          
        </div>
        <div style={{ height: '10rem', backgroundColor: 'green', fontSize: '50px', textAlign: 'center', color: 'white' }} className="d-flex flex-column flex-sm-row align-items-center">
            <p className="mx-3 p-0">The</p>
            <p > Generics</p>
            
        </div>
    </>


}


export default Home