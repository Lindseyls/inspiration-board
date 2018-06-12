import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  onClickHandler = () => {
    this.props.deleteCallback(this.props.index, this.props.id);
  }

  render() {
    return (
      <section className="card">
        <button
          className="card__delete"
          onClick={ this.onClickHandler }>X</button>

        <div className="card__content">
          <h1 className="card__content-text">
            {this.props.text}
          </h1>

          <h1 className="card__content-emoji">
            {emoji.getUnicode(`${this.props.emoji}`)}
          </h1>
        </div>
      </section>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  index: PropTypes.number,
  id: PropTypes.number,
  deleteCallback: PropTypes.func
};

export default Card;
