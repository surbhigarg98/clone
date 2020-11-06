import React from 'react';

import './App.css';
import Row from './Row';
import requests from './requests'
import Banner from './Banner';
import Nav from './Nav';



function App() {
  
  return (
    <div className="App">
     
        <div className="App_body">
        <Nav/>
      <Banner/>
       <Row title="NETFLIX ORIGNALS" fetchUrl = {requests.fetchNetflixOrignals} islargeCover/>
       {/* by default isLargeCover is true */}
       <Row title ="Trending Now" fetchUrl ={requests.fetchTrending}/>
       <Row title ="Top Rated" fetchUrl ={requests.fetchTopRated}/>
       <Row title ="Action Movies" fetchUrl ={requests.fetchActionMovies}/>
       <Row title ="Comedy Movies" fetchUrl ={requests.fetchComedyMovies}/>
       <Row title ="Horror Movies" fetchUrl ={requests.fetchHorrorMovies}/>
       <Row title ="Roamantic Movies" fetchUrl ={requests.fetchRomanticMovies}/>
       <Row title ="Documentaries" fetchUrl ={requests.fetchDocumentaries}/>
        </div>
      
      

    
    </div>
  );

  }
export default App;
