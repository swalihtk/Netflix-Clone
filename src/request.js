const API_KEY="4a387684309929be9397854515a5fa96";

const request={
    fetchTrending: `/trending/all/day?api_key=4a387684309929be9397854515a5fa96`,
    fetchNetflixOriginals: `/discover/tv?api_key=4a387684309929be9397854515a5fa96&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaried:`/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default request;