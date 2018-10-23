import React from 'react';
import { connect } from 'react-redux';
import { delItem, toggleItem } from '../actions'

const ListContainer = ({ list, delItem, toggleItem }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index} className="list-group-item">
          <span onClick={() => toggleItem(index)}>Q</span>
          {item.text}
          <span onClick={() => delItem(index)}>X</span>
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

export default connect(mapStateToProps, { delItem, toggleItem })(ListContainer);