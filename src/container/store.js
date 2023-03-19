import { configureStore,createSlice } from "@reduxjs/toolkit";

const initialState ={
    data:[]
}

const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers: {
        addtoList:(state,action)=>{
           state.data.push(action.payload)
        },
        deletefromList:(state,action)=>{
            state.data = state.data.filter(e => e.id !== action.payload)
        }
      },
    })


export const store = configureStore({
    reducer:{
        [taskSlice.name]:taskSlice.reducer
    }
});

export const {addtoList,deletefromList} = taskSlice.actions