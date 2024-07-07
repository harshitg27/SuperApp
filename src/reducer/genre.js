
const initialState = {
    genres: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDGENRE':
            return {
                ...state,
                genres: [...state.genres, action.payload]
            }
        case 'DELETEGENRE':
            let newGenre = state.genres.filter((id) => id != action.payload)
            return {
                ...state,
                genres: newGenre
            }
        default:
            return state
    }
}

export default reducer