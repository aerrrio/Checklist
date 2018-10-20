import * as types from '../constants/ActionTypes'

export const addItem = (item) => ({
  type: types.ADD_ITEM,
  item
});

export const delItem = (item, index) => ({
  type: types.DEL_ITEM,
  item,
  index
});

export const toggleItem = (item, index) => ({
  type: types.TOGGLE_ITEM,
  item,
  index
});