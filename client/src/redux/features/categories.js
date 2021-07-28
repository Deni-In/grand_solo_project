const initialState = {
    loading: false,
    items: []
};

const categories = (state = initialState, action) => {
    switch (action.type) {
        case 'categories/fetch/pending':
            return {
                ...state,
                loading: true
            };
        case 'categories/fetch/fulfilled':
            return {
                ...state,
                loading: false,
                items: action.payload
            };
        case 'categories/fetch/rejected':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default categories

export const loadAllCategories = () => {
    return async (dispatch) => {
        dispatch({ type: 'categories/fetch/pending'});

        try {
            const response = await fetch('/categories');
            const json = await response.json();

            dispatch({ type: 'categories/fetch/fulfilled', payload: json});
        } catch (e) {
            dispatch({ type: 'categories/fetch/rejected', error: e.toString()})
        }
    }
}

export const selectAllCategories = (state) => state.categories.items