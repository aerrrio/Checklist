import { ADD_ITEM, DEL_ITEM, TOGGLE_ITEM } from '../constants/ActionTypes'

const ListReducer = (state = {list: []}, action) => {
  console.log("ListReducer called")
  switch(action.type) {
    case ADD_ITEM:
      return {...state, list: [...state.list, action.item] };
      
    case DEL_ITEM:
      return action.payload; 

    case TOGGLE_ITEM:
      return action.payload; 

    default:
      return state;
  }
}
export default ListReducer;

