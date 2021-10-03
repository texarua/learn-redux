import { useSelector } from "react-redux"

function ListRedux() {
    const hobbyList = useSelector(state => state.hobby.hobbyList)

    function fetchData() {
        if (hobbyList instanceof Array) {
            return hobbyList.map((item, i) => {
                return (
                    <>
                        <p>{item}</p><br/>
                    </>
                )
            })
        }
    }

    return (
        <>
            {fetchData}
            </>
    )
}

export default ListRedux