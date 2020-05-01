import React, { Component, useState, useEffect } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import CardList from './components/CardList/CardList';
import CardsForm from './components/CardsForm/CardsForm';

import { v4 as uuidv4 } from 'uuid';

class App_ClassBased extends Component {
  state = {
    cards: []
  }
  componentDidMount() {
    // called when the component first mounts to the DOM 
    // - data loading, e.g. from APIs (Application Programming Interfaces)
    // Do not load data inside the constructor! Load data in the componentDidMount
    fetch( this.props.apiUrl )
      .then( data => data.json() )
      .then( countries => {
          function getNameAndCapital( country ) {
            return { 
              frontSide: country.name, 
              backSide: country.capital,
              id: uuidv4() 
            }
          }
          const cards = countries.map( getNameAndCapital );
          this.setState({ cards });
      } );
  }

  render() {
    return (
      <div className="App">
        <AppHeader title="Flash Cards" />
        <CardsForm />        
        <CardList cardData={this.state.cards} />
      </div>
    );
  }
}

function App_Functional( props ) {
  const [cards, setCards] = useState([]);

  // functionCallback is called 
  // 1. componentDidMount()
  // 2. componentDidUpdate() or componentWillUnmount()
  useEffect( () => {
    if ( cards.length === 0 ) {
      fetch( props.apiUrl )
      .then( data => data.json() )
      .then( countries => {
          function getNameAndCapital( country ) {
            return { 
              frontSide: country.name, 
              backSide: country.capital,
              id: uuidv4()  
            }
          }
          const cards = countries.map( getNameAndCapital );
          setCards(cards);
      } );
    } 
  } );
  function addItem(frontSide, backSide) { 
    if ( typeof cards.find( card => card.frontSide == frontSide ) !== 'undefined' ) {
      alert('The front side has to be unique. Card was not added');
    } else {
      const newItem = { 
        frontSide, 
        backSide, 
        id: uuidv4() 
      }
      setCards( previousCards => 
        [newItem, ...previousCards] 
      );
    }
  }
  function deleteItem(id) {
    setCards( previousCards => 
      previousCards.filter( card => card.id !== id )
    );
  }
  return (
    <div className="App">
      <AppHeader title="Flash Cards" />
      <CardsForm addItem={addItem} />
      <CardList cardData={cards} deleteItem={deleteItem} />
    </div>
  );  
}

export default App_Functional;
