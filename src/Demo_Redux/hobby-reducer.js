const initialState = {
    hobbyList : ['coding'],
    subId: null,
}

const HobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            let hobbyList = [...state.hobbyList]
            hobbyList.push(action.payload)
            
            return {
                ...state,
                hobbyList : hobbyList
            }
    
        default:
            return state
    }
}

export default HobbyReducer