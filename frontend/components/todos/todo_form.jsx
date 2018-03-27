import React from 'react';
import uniqueId from '../../util/util';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ""};
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.id = uniqueId();
    this.props.receiveTodo(this.state);
  }

  handleInputChange(e) {
    e.preventDefault();
    const changed = e.target.value;
    this.setState({title: changed});
  }

  render() {
    return (
      <form>
        <h3>Create Todo</h3>
        <label>Todo
          <input type="text"
            value={this.state.title}
            onChange={e => this.handleInputChange(e)}></input>
        </label>
        <button onClick={(e) => this.handleSubmit(e)}>Add Todo</button>
      </form>
    );
  }
}
