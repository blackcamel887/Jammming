import React,{useState} from "react";
import TrackList from "./TrackList";
function PlayList(props){
    const [trackName,setTrackName] = useState('');//keeps track of the name of the playlist
    function handleChange(event){//updates the name of the playlist when input is changed
        setTrackName(event.target.value);
    }
    return(<div>
            <input type='text' onChange={handleChange} value={trackName} placeholder="list name"/>
            <TrackList songs={props.songs} symbol='X' remove={props.remove}/>
            <button>Save to Spotify</button>
        </div>);
}
export default PlayList;