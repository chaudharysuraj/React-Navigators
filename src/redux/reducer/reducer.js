
const defaultState = {
    data: []
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'UPDATE_DATA':
            return Object.assign({}, state, {
                data: action.data,
            });
        default:
            return state;
    }
}