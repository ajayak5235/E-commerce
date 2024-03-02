const AppComponents = (props) =>{
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [cancel, setCancel] =  useStete(true)

    async function fetchMoviesHandler(){
            setError(null)
            setLoading(true);
            
    }
}