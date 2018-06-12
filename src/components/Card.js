import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  static propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string
  };

  render() {
    return (
      <section className="card">
        <button className="card__delete">X</button>
        <div className="card__content card__content-text">
          {this.props.text}
        </div>

        <div className="card__content card__content-emoji">
          {emoji.getUnicode(`${this.props.emoji}`)}
        </div>
      </section>
    )
  }
}

Card.propTypes = {

};

export default Card;
