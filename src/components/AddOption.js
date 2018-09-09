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
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"  />
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}
