import React from "react";
function Track(props){
    return (<div>
            <h2>{props.name}</h2>
            <h3 style={{color: "grey"}}>{props.artist} | {props.album}</h3>
            </div>)
}
export default Track