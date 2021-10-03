import hobbyReducer from "./features/hobby-slice"

const { combineReducers } = require("redux")

const RootReducer = combineReducers({
    hobby : hobbyReducer
})

export default RootReducer