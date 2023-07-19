import React from "react";
import Track from './Track'
function TrackList(props){
    let list = [];


    for(const song of props.songs){
        list.push(<li>
            <Track key={song.id} artist={song.artist} album={song.album} name={song.name}/>
            <button onClick={()=>{
                props.add(song);
                props.remove(song);
            }}>{props.symbol}</button>
        </li>)
    }
    return (
    <div>
        <ul>{list}</ul>
    </div>
    )

}
export default TrackList