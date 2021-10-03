import { combineReducers } from "redux";
import ListBlogReducer from "./list-reducer";

const RootReducer = combineReducers({
    listBlogReducer : ListBlogReducer
})

export default RootReducer