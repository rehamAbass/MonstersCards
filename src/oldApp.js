
import React from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css'
import Header from './components/header/header.component.jsx'
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      group: [],
      admin: {
        firstName: 'Reham', lastName: "Abass",
      },
      monsters: [],
    }
  }
  //==========================================================================================
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        this.setState(
          () => {
            return { ...this.state, monsters: users, group: users }
          },
          () => {
            // console.log(" after setState : ", this.state);
          }
        )
      })
  }
  //========================================================================================
  onSearchChanged = (event) => {
    // console.log("****** = ", event.target.value);
    let sub = event.target.value;
    sub = sub.toLowerCase();
    let group = this.state.monsters.filter((m) => m.name.toLowerCase().includes(sub));
    this.setState(
      () => {
        return { group };
        // return { ...this.state, group: group }
      },
      () => {
        console.log(" after set search group =   ", this.state);
      }
    )
  }

  //=========================================================================================
  render() {

    const { group, admin } = this.state;
    const { onSearchChanged } = this;
    return (
      <div className="App">

        <header className="App-header">
          <Header admin={admin} />
          <SearchBox
            className='monsters-search-box'
            placeholder='search monsters '
            // style={{ width: 300, height: 50, marginTop: 30, color: 'blue' }}
            searchHandler={onSearchChanged}
          />
          <CardList group={group} />

        </header>
      </div>
    );
  }
}

export default App;
