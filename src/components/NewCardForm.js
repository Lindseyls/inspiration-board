import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';


const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  static propTypes = {
    addCardCallback: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.state = {
      card: {
        text: '',
        emoji: ''
      }
    };
  }

  onInputChange = (event) => {
    console.log('form submitted');

    let updatedInput = {};

    updatedInput[event.target.name] = event.target.value;

    this.setState(updatedInput);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
    this.props.addCardCallback(this.state);

    this.setState({
      card: {
        text: '',
        emoji: ''
      }
    });
  }


  render() {

    const emojiList = EMOJI_LIST.map((name, index) => {
      return <option key={index} value={name}>{emoji.getUnicode(name)}</option>
    });

    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="text">Text:</label>
          <input
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.onInputChange}
          />
        </div>

        <div>
          <label htmlFor="emoji">
            Pick your favorite Emoji:
            <select
            type="text"
            name="emoji"
            value={this.state.emoji}
            onChange={this.onInputChange}
            >
              {emojiList}
            </select>
          </label>
        </div>

        <div><input type="submit" value="Submit" /></div>
      </form>
    )
  }

}

export default NewCardForm;
