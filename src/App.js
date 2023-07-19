import './App.css';
import React, { useState } from 'react';
import SearchBar from './SearchBar'
import SearchResults from './SearchResults';
import PlayList from './PlayList';
function App() {
  const [resultTracks,setResultTracks] = useState([{name:'Bob',artist:'Me',album:'new',id:1}]);
  const [myTracks,setMyTracks] = useState([]);
  function addToResultTracks(song){
    setResultTracks(prev=>[song,...prev])
  }
  function addToMyTracks(song){
    setMyTracks(prev=>[song,...prev])
  }
  function removeFromResultTracks(song){
    setResultTracks(prev=>prev.filter((element)=>element.id!==song.id))
  }
  function removeFromMyTracks(song){
    setMyTracks(prev=>prev.filter((element)=>element.id!==song.id))
  }
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar/>
        <SearchResults songs={resultTracks} add={addToMyTracks} remove={removeFromResultTracks}/>
        <PlayList songs={myTracks} add={addToResultTracks} remove={removeFromMyTracks}/>
      </header>
    </div>
  );
}

export default App;
