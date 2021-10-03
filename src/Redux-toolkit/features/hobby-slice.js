import { createSlice } from "@reduxjs/toolkit";

const hobbySlice = createSlice({
    name: 'hobby',
    initialState: {
        hobbyList : ['coding'],
        subId : null
    },
    reducers: {
        addHobby(state, action) {
            console.log('123123123')
            const { content } = action.payload
            state.hobbyList.push(content)
        }
    }
})

export const { addHobby } = hobbySlice.actions

export default hobbySlice.reducer