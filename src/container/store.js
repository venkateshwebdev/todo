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

const modalSlice = createSlice({
    name:"modal",
    initialState:{isActive:false,target:undefined},
    reducers:{
        modalStatus:(state,action)=>{
            state.isActive = action.payload
        },
        modalDetails:(state,action)=>{
            state.target=action.payload
        }
    }
}) 

export const store = configureStore({
    reducer:{
        [taskSlice.name]:taskSlice.reducer,
        [modalSlice.name]:modalSlice.reducer
    }
});

export const {addtoList,deletefromList} = taskSlice.actions
export const {modalStatus,modalDetails}=modalSlice.actions