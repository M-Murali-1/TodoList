import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TodoistApi } from "@doist/todoist-api-typescript";

const api = new TodoistApi("14e22f56fadd08cdc9be1df7443ca10afaf40262");

const initialState = {
  tasks: [],
  selectedTask: "",
  taskLoading: true,
  taskError: "",
};
export const fetchTasks = createAsyncThunk("project/fetchTasks", () => {
  return api.getTasks();
});

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (element) => element.id != action.payload
      );
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((element) =>
        element.id === action.payload.id ? action.payload : element
      );
    },
  },
  extraReducers: (builders) => {
    builders.addCase(fetchTasks.pending, (state) => {
      state.taskLoading = true;
    });
    builders.addCase(fetchTasks.fulfilled, (state, action) => {
      state.taskLoading = false;
      state.taskError = "";
      state.tasks = action.payload;
    });
    builders.addCase(fetchTasks.rejected, (state, action) => {
      state.taskLoading = false;
      state.taskError = action.payload;
      state.tasks = [];
    });
  },
});

export default taskSlice.reducer;

export const { addTask, removeTask, updateTask } = taskSlice.actions;
