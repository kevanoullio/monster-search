import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import SearchBar from "./components/searchbar/searchbar.component";
import CardList from "./components/cardlist/cardlist.component";

function App() {
  const [monsters, setMonsters] = useState( [] );
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchMonsters = async () => {
      const response = await axios(
        'https://jsonplaceholder.typicode.com/users',
        );
        setMonsters(response.data);        
    };
    fetchMonsters();
  });
  
  useEffect(() => {
    let filtered = [];
    if (searchInput === "") {
      filtered = monsters
    } else {
      filtered = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    setFilteredMonsters(filtered);
  }, [monsters, searchInput]);

  const handleInput = e => {
    setSearchInput(e.target.value)
  };

  return (
    <div className="App">
      <h1>Big Bad Monster Bash</h1>
      <SearchBar
        placeholder='Search Monster'
        handleInput={handleInput}
        />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
