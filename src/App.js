import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar'
import SearchResults from './SearchResults';
import PlayList from './PlayList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar/>
        <SearchResults songs={[{name:'Bob',artist:'Me'}]}/>
        <PlayList/>
      </header>
    </div>
  );
}

export default App;
