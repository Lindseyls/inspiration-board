import React, { Component } from 'react';
import './App.css';

import Board from './components/Board';

class App extends Component {
  render() {

    const cardComponents = <
      Board
      // url="https://inspiration-board.herokuapp.com/boards/"
      // boardName={`Luxi-Lindsey`}
      />;

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
