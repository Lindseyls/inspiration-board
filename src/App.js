import React, { Component } from 'react';
import './App.css';


import cardData from './data/card-data.json';

import Board from './components/Board';


class App extends Component {
  render() {

    const cardComponents = <
      Board
      cards={cardData}
      // url="https://inspiration-board.herokuapp.com/boards/"
      // boardName={`Ada-Lovelace`}
      />;

    console.log(cardComponents)

    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>

          {cardComponents}

      </section>
    );
  }
}

export default App;
