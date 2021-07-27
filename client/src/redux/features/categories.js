const initialState = {
    loading: false,
    items: []
};

const categories = (state = initialState, action) => {
    switch (action.type) {
        case 'load':
            return state
        default: return state
    }
}

export default categories