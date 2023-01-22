import { IAction, Item } from "../../@types/types";

const addItem = (state: Item[], action: IAction) => {
  return [...state, action.payload];
}

const deleteItem = (state: Item[], action: IAction) => {
  return state.filter(item => item.id != action.payload.id);
}

const checkeItem = (state: Item[], action: IAction) => {
  return state.map(item => {
    if (item.id === action.payload.id) item = { ...action.payload, ischecked: !item.ischecked }
    return item
  })
}


const listReducer = (state = [] as Item[], action: IAction) => {
  switch (action.type) {
    case 'ADD':
      return addItem(state, action)

    case 'DELL':
      return deleteItem(state, action);

    case 'CHECK':
      return checkeItem(state, action)

    default:
      return state
  }
}

export default listReducer;
