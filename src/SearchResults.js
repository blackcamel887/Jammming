import React from "react";

function SearchResults(props){
    let list = [];
    for(const i of props.songs){
        list.push(<li>
            <h2>{i.name}</h2>
            <h3 style={{color: "grey"}}>{i.artist}</h3>
            <button>+</button>
        </li>)
    }
    return (
    <div>
        <h1>Results</h1>
        <ul>{list}</ul>
    </div>
    )
}
export default SearchResults