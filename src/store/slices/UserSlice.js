import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action){
            state.push(action.payload);
            //console.log(action.payload);
        },
        removeUser(state, action){
            // console.log("Hi: "+ action.payload);
            state.splice(action.payload, 1);
        },
        deleteUsers(state, action){
            // console.log("delete user");
            // return state = []
            return []
        },
    },
    // extraReducers(builder){
    //     builder.addCase(userSlice.actions.clearAllUsers, (state, action)=>{
    //         return[]
    //     })
    // }
});


export default userSlice.reducer;

export const {addUser, removeUser, deleteUsers} = userSlice.actions;