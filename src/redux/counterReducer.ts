const initialState = {
    number: 120,
    incrementCount: 0,
    decrementCount: 0
}

interface IAction {
    type: string,
    payload?: any
}

function counterReducer(state = initialState, action: IAction) {

    console.log('counterReducer called with state', state, 'and action', action)
    if (action.type === 'INCREMENT') {
        return { ...state, number: state.number + 1, incrementCount: state.incrementCount + 1 }
    }

    if (action.type === 'DECREMENT') {
        return { ...state, number: state.number - 1, decrementCount: state.decrementCount + 1 }
    }

    if (action.type === 'ADD') {
        return { ...state, number: state.number +  action.payload}
    }
    if (action.type === 'SUBTRACT') {
        return { ...state, number: state.number -  action.payload}
    }
    if (action.type === 'MULTIPLY') {
        return { ...state, number: state.number *  action.payload}
    }
    if (action.type === 'DIVIDE') {
        return { ...state, number: state.number / action.payload}
    }

    return { ...state };
}

export default counterReducer;