import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../actions'

class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleEnterKey = this.handleEnterKey.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  handleEnterKey(e) {
    if(e.key === 'Enter') this.handleAddItem();
  }

  handleAddItem() {
    if(this.state.input.length > 0) {
      this.props.addItem(this.state.input);
      this.setState({input: ''});
    }
  }

  render() {
    //console.log("his.props.list",this.props.list)
    return (

      <input
        placeholder="+ Add Item"
        onChange={this.handleChange}
        onKeyPress={this.handleEnterKey}
        value={this.state.input}
      >
      </input>

    );
  }
}
/*
const mapStateToProps = (state) => {
  return {
    list: state.Reducer.list
  }
}*/

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addItem }, dispatch);
}

export default connect(null, mapDispatchToProps)(InputContainer);