import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired
  };

  constructor(props) {
    super();

    this.state = {
      cards: props.cards
      // cards: [],
    };
  }

  render() {


    console.log(this.state.cards.cards);
    const cards = this.state.cards.cards.map((card, index) => {
      return <Card key={index}
        text={card.text}
        emoji={card.emoji} />
    });

    return (
      <div className="board">
        { cards }
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
