import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Banner from "./Components/Banner.js";
import Largemovie from "./Components/LargeMovie.js";
import Smallmovie from "./Components/SmallMovie.js";

function App() {
  const nav=document.getElementById('nav');
        window.addEventListener('scroll',()=>
        {
            if(window.scrollY>=100)
            {
                nav.classList.add('nav_black');
            }
            else{
                nav.classList.remove('nav_black');
            }
        })
        // const options = {
        //   method: 'GET',
        //   url: 'https://api.themoviedb.org/3/movie/550?api_key=c863dcbbc76fcc63cd5a25208778c220/',
        //   headers: {
        //     'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
        //     'x-rapidapi-key': '2525370703msh6fa6fa1aab174a0p14105ajsn3ba421f45fc5'
        //   }
        // };
        
        // axios.request(options).then(function (response) {
        //   console.log(response);
        // }).catch(function (error) {
        //   console.error(error);
        // });
        // axios.get('https://api.themoviedb.org/3/discover/tv?api_key=${APIKEY}&with_networks=213')
        // .then((res)=>
        // {
        //   console.log(res);
        // })
        // const request={
        //   fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
        // }
        // console.log(request);
//         const API_KEY="c863dcbbc76fcc63cd5a25208778c220";
// const BASE_URL="https://api.themoviedb.org/3";
// const API_URL=BASE_URL+'/discover/movie?sort_by=popularity.desc&'+API_KEY;
// console.log(API_URL);
// function value(API_URL)
// {
// fetch(API_URL).then(res=>

//     res.json()).then(data=>{
//         console.log(data);
//     })
// }
// value(API_URL);
  return (
    <div className="App">
      <div className="nav">
        <img src='../Images/netflix-logo.png' alt="image not found" className="nav_logo"/>
        <img src='../Images/netflix-avatar.png' alt="image not found"className="nav_avatar"/>
    </div>
    <Banner/>
   <Largemovie/>
    <Smallmovie/>
    </div>
  );
}

export default App;