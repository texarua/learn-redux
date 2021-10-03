const initialState = {
    laterList: [],
}

const ListBlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LATE':
            let laterList = [ ...state.laterList ]
            laterList.push(action.payload)

            return {
                ...state,
                laterList: laterList
            } 
    
        default:
            return state;
    }
}

export default ListBlogReducer