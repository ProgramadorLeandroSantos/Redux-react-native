export interface Item {
    title: string,
    id: number,
    ischecked: boolean
}

export interface IState {
    listReducers: Item[]
}

export interface Icounter{
    itemsTodo: number,
    itemsDone: number,
    total: number
}

export interface IAction {
    type: string,
    payload: Item
}