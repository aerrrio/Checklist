import React, { Component } from 'react';
import ListContainer from '../containers/ListContainer';
import InputContainer from '../containers/InputContainer';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputContainer />
        <ListContainer />
      </div>
    );
  }
}

export default App;
