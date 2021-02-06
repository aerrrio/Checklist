import React from 'react';
import { connect } from 'react-redux';
import { delItem, toggleItem } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* maybe add aside tags */

function CheckIcon(props) {
  if(!props.isChecked) return <FontAwesomeIcon className="list-btn-uncheck" icon={['far', 'circle']} />
  return <FontAwesomeIcon className="list-btn-check" icon="check-circle" size="md" />
}

const ListContainer = ({ list, delItem, toggleItem }) => {
  return (
    <div className="list-container">
      <ul>
        {list.map((item, index) => (
          <li key={index} className="list-group-item">
            <span 
              onClick={() => toggleItem(index)}>
              <CheckIcon isChecked={item.done}/>
              {' '}
            </span>
            <span className="list-text">{item.text}</span>
            <span 
              onClick={() => delItem(index)}>
              {' '}
              <FontAwesomeIcon className="list-btn-delete" icon="trash-alt" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.ListReducer.list
  }
}

export default connect(mapStateToProps, { delItem, toggleItem })(ListContainer);