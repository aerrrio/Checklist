import React, { Component } from 'react';
import ListContainer from '../containers/ListContainer';
import InputContainer from '../containers/InputContainer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/fontawesome-free-regular';
import './styles.css';

library.add(faPlus, faCheckCircle, faTrashAlt, faCircle);

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
