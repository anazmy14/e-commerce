import { SET_FILTER } from "../constants/action-types"
const initialState = {
    filter: {
        categoryId: null,
        min: null,
        max: null,
        rating: null,
        colors: new Set()
    }
};
function reducer(state = initialState, action) {
    if (action.type === SET_FILTER) {
        return {
            ...state,
            filter:
            {
                ...state.filter,
                ...action.payload
            }
        }
    }
    return state;
}
export default reducer;