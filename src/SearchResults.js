import React from "react";
import TrackList from "./TrackList";
function SearchResults(props){
    return(<div>
        <h1>Results</h1>
        <TrackList songs={props.songs} symbol='+' add={props.add} remove={props.remove}/>
        </div>);
}
export default SearchResults