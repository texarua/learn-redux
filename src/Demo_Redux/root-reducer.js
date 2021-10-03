const { combineReducers } = require("redux")
const { default: HobbyReducer } = require("./hobby-reducer")

const RootReducer = combineReducers({
    hobby : HobbyReducer
})

export default RootReducer