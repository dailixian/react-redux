const initialState = {
    number: 120,
    incrementCount: 0,
    decrementCount: 0
}

interface IAction {
    type: string,
    payload?: unknown
}

function counterReducer(state = initialState, action: IAction) {

    console.log('counterReducer called with state', state, 'and action', action)
    if (action.type === 'INCREMENT') {
        return { ...state, number: state.number + 1, incrementCount: state.incrementCount + 1 }
    }

    if (action.type === 'DECREMENT') {
        return { ...state, number: state.number - 1, decrementCount: state.decrementCount + 1 }
    }

    return { ...state };
}

export default counterReducer;