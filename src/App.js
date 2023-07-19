import './App.css';
import React, { useState } from 'react';
import SearchBar from './SearchBar'
import SearchResults from './SearchResults';
import PlayList from './PlayList';
function App() {
  //the tracks that are displayed as the result of search
  const [resultTracks,setResultTracks] = useState([{name:'Bob',artist:'Me',album:'new',id:1},{name:'James',artist:'Him',album:'old',id:2}]);
  //the tracks that are saved to the custom playlist
  const [myTracks,setMyTracks] = useState([]);
  //adding songs to the custom playlist
  function addToMyTracks(song){
    //checks if the playlist contains the song already
    for(const track of myTracks){
      if(track.id===song.id){
        return;
      }
    }
    //add to custom playlist if not
    setMyTracks(prev=>[song,...prev])
  }
  //removes the selected song from custom playlist
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
