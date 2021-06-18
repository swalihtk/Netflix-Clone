import './App.css';
import Row from './components/Row';
import request from './request'
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* MainHeader */}
      <Header fetchURL={request.fetchTrending}/>
      {/* Row */}
      <Row title="NETFLIX ORIGINALS" isNetflix fetchURI={request.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchURI={request.fetchTrending}/>
      <Row title="Top Rated" fetchURI={request.fetchTopRated}/>
      <Row title="Action Movies" fetchURI={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURI={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURI={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURI={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURI={request.fetchDocumentaried}/>
    </div>
  );
}

export default App;
