import React, { useContext, useEffect, useRef, useState } from "react"
import { Container, Row, Spinner } from "react-bootstrap"
import SingleProduct from "./SingleProduct"
import { productsArr } from "../ProductsArr/productsArr"
import MovieForm from "./MovieForm"
import cartContext from "../store/cart-context"
import Login from "../pages/Login"
import { NavLink, useNavigate } from "react-router-dom"





const AppComponents = (props) => {

  const [movies, setMovies] = useState([])
  const [loading, setLoad] = useState(false)
  const [error, setError] = useState(null)
  const [cancel, setCancel] = useState(true);

  const histor=useNavigate()
  // const [run,setRun]=useState(true)
  const runRef = useRef(false);
  const changing = useRef(true)

  const authctx = useContext(cartContext)

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      // authctx.login(localStorage.getItem('token'))
      histor('/login')
    }
  })

  // if(localStorage.getItem('token')!==null){
  //   authctx.login(localStorage.getItem('token'))
  // }
  async function fetchMoviesHandler() {

    setError(null)
    setLoad(true);
    try {
      let response = await fetch('https://react-http-76942-default-rtdb.firebaseio.com/movies.json')
      if (!response.ok) {
        throw new Error('SomeThing went wrong!')
      }
      let data = await response.json()
      // data.results;
      const loadedMovies = []

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          price: data[key].price,
          imageUrl: data[key].imageUrl
        })
      }
      // console.log(data.results)

      setMovies(loadedMovies);
      setLoad(false)

      setCancel(true)
      runRef.current = false;
    } catch (err) {
      setError(err.message)
      setLoad(false)
      if (changing.current) {
        runRef.current = true;
        console.log('errorrr')
        setCancel(false)
        return;
      } else {
        changing.current = true;
        console.log('no call again')
      }
    }

  }
  useEffect(() => {
    fetchMoviesHandler()
  }, [])

  useEffect(() => {

    let id = null;
    console.log('wanted to run')
    if (runRef.current && error) {
      console.log('running')
      id = setInterval(() => {
        fetchMoviesHandler()
      }, 5000)

    } else {
      setError(null)
      // changing.current=true;
    }

    return () => {
      console.log('clearing interval')
      if (id !== null) {
        clearInterval(id)
        console.log('interval destroyed')
      }

    }
  }, [runRef.current])

  const change = () => {
    console.log('under change ', runRef.current)
    runRef.current = false;
    changing.current = false;
    setError(null)
    console.log(runRef.current + ' run')
  }

  const history = useNavigate()

  // if(!authctx.isLoggedIn){
  //   history('/login')
  // }

  async function addMovieHandler(movie) {
    // setMovies([...movies,movie])
    const response = await fetch('https://react-http-76942-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setMovies([...movies, movie])
    const data = await response.json();
    console.log(data)

  }

  async function deleteItem(item) {
    console.log(item.id)
    const response = await fetch(`https://react-http-76942-default-rtdb.firebaseio.com/movies/${item.id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json();
    console.log(data)

    let m = [...movies];
    let ans = []
    for (let i = 0; i < m.length; i++) {
      if (m[i].id === item.id) {
        continue;
      }
      ans.push(m[i])
    }
    // fetchMoviesHandler()

    setMovies([...ans])
  }




  return <>
    {authctx.isLoggedIn && <div>
      <MovieForm addMovieHandler={addMovieHandler} />
      <Container className='d-flex  align-items-center justify-content-center'>

        <Row className='d-flex gap-5 align-items-center justify-content-center mt-5'>

          <button onClick={fetchMoviesHandler} disabled={loading && !error ? true : false} >{loading ? <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> : 'Get'} {loading && !error ? 'loading... Movies' : 'Movies'}
          </button>

          { }
          <section>
            {!loading && error && <div className="d-flex flex-row" style={{ textAlign: 'center' }}><p className="mx-5">{error} {` Retrying in 5 second`}</p><button onClick={change}>Cancel</button></div>}
          </section>

          {movies.map(item => {
            return <SingleProduct deleteItem={deleteItem} item={item} key={Math.random().toString() + '12'} />
          })}

        </Row>
      </Container>
    </div>}

    {/* {authctx.isLoggedIn && <NavLink to='/login' />} */}
e


  </>
}


export default AppComponents