import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    selectedTask:"",
    selectedProject:""
}

const selectedSlice = createSlice({
    name:"selected",
    initialState,
    reducers:{
        taskSelected:(state,action)=>{
            state.selectedTask = action.payload
        },
        projectSelected:(state,action)=>{
            console.log("within the selected project the action.payload is :",action);
            
            state.selectedProject = action.payload
        }
    }
})

export default selectedSlice.reducer;
export const {taskSelected,projectSelected} = selectedSlice.actions;