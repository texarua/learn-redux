import { useDispatch, useSelector } from "react-redux"
import ButtonRedux from "./button-redux"
import ListRedux from "./list-redux"

function AppRedux() {
    const listHobby = useSelector(state => state.hobby.hobbyList)
    const dispatch = useDispatch()

    return (
        <>
            {ListRedux}
           {ButtonRedux} 
        </>
    )
}

export default AppRedux