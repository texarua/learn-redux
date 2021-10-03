import { useDispatch } from "react-redux"
import { addHobby } from "./features/hobby-slice"

function ButtonRedux() {
    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => dispatch(addHobby({content: 'demo123123'})) }>Add hobby</button>
        </>
    )
}

export default ButtonRedux