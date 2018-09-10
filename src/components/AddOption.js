import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (value) => {
    value.preventDefault();
    const option = value.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(()=>({error}));
    if (!error) {
      value.target.elements.option.value = '';
    }
  };
  render() {
    return(
      <div>
      {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input type="text" className="add-option__input" name="option"  />
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}
