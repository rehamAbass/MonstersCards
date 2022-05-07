
import React from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css'
import Header from './components/header/header.component.jsx'
import { useState, useEffect } from 'react';
// class App2 extends React.Component{

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchString, setSearchString] = useState('');
  const admin = { firstName: 'Reham', lastName: 'Abass' };
  //==========================================================================================
  useEffect(() => {
    console.log('inside useEffect !');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        setFilteredMonsters(users);
        setMonsters(users);
      }).then(() => {
        console.log("monsters = ", monsters, " filtered = ", filteredMonsters)
      })
  }, []); // it runs only one time - no need to call it in each render because [] is empty !!
  //=========================================================================================
  useEffect(() => {
    let filteredgroup = monsters.filter((m) => m.name.toLowerCase().includes(searchString));
    setFilteredMonsters(filteredgroup);
  }, [monsters, searchString])

  //========================================================================================
  const onSearchChanged = (event) => {
    let input = event.target.value.toLowerCase();
    console.log("** input  = ", input);
    setSearchString(input);
  }
  //=========================================================================================
  return (
    <div className="App">
      <header className="App-header">
        <Header admin={admin} />
        <SearchBox
          className='monsters-search-box'
          placeholder='search monsters '
          searchHandler={onSearchChanged}
        />
        <CardList group={filteredMonsters} />

      </header>
    </div>
  )
}

export default App;
