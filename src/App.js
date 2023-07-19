import './App.css';
import React, { useState } from 'react';
import SearchBar from './SearchBar'
import SearchResults from './SearchResults';
import PlayList from './PlayList';
function App() {
  const [resultTracks,setResultTracks] = useState([{name:'Bob',artist:'Me',album:'new',id:1},{name:'James',artist:'Him',album:'old',id:2}]);
  const [myTracks,setMyTracks] = useState([]);

  function addToMyTracks(song){
    for(const track of myTracks){
      if(track.id===song.id){
        return;
      }
    }
    setMyTracks(prev=>[song,...prev])
  }
  function removeFromMyTracks(song){
    setMyTracks(prev=>prev.filter((element)=>element.id!==song.id))
  }
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar/>
        <SearchResults songs={resultTracks} add={addToMyTracks}/>
        <PlayList songs={myTracks} remove={removeFromMyTracks}/>
      </header>
    </div>
  );
}

export default App;
