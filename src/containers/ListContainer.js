import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { delItem, toggleItem } from '../actions'

const ListContainer = ({ list, delItem, toggleItem }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index} className="list-group-item">
          <span onClick={null}></span>
          {item}
          <span onClick={null} ></span>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.ListReducer.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ delItem, toggleItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);