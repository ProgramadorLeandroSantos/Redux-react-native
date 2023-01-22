import { Item } from "../../../@types/types"

export const addItem = (payload: Item) => ({
    type: 'ADD',
    payload
})

export const deleteItem = (payload: Item) => ({
    type: 'DELL',
    payload
})

export const checkeItem = (payload: Item) => ({
    type: 'CHECK',
    payload
})