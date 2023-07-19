import React,{useState} from "react";
import TrackList from "./TrackList";
function PlayList(props){
    const [trackName,setTrackName] = useState('');
    function handleChange(event){
        setTrackName(event.target.value);
    }
    return(<div>
            <input type='text' onChange={handleChange} value={trackName} placeholder="list name"/>
            <TrackList songs={props.songs} symbol='X' remove={props.remove}/>
        </div>);
}
export default PlayList;