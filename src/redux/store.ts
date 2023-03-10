import { legacy_createStore as createStore } from "redux"
import rootReducer from "./rootReducer"

export interface ICounterReducer {
    incrementCount: number,
    decrementCount: number,
    number: number,
}
export interface IStore {
    counterReducer: ICounterReducer
}

export default createStore(rootReducer);