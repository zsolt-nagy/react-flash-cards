import React, { Component, useState, useEffect } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import CardList from './components/CardList/CardList';
import CardsForm from './components/CardsForm/CardsForm';

const cardData = [ 
  {
    frontSide: '9 * 8',
    backSide: '72'
  },
  {
    frontSide: '2 ** 8',
    backSide: '256'
  },
  {
    frontSide: 'rabbit * 8',
    backSide: 'rabbyte'
  },
  {
    frontSide: '9 * 8',
    backSide: '72'
  },
  {
    frontSide: '2 ** 8',
    backSide: '256'
  },
  {
    frontSide: 'rabbit * 8',
    backSide: 'rabbyte'
  }   
];

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
            return { frontSide: country.name, backSide: country.capital }
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
            return { frontSide: country.name, backSide: country.capital }
          }
          const cards = countries.map( getNameAndCapital );
          setCards(cards);
      } );
    } 
  } );
  return (
    <div className="App">
      <AppHeader title="Flash Cards" />
      <CardsForm />
      <CardList cardData={cards} />
    </div>
  );  
}

export default App_Functional;
