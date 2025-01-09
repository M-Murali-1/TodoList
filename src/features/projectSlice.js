import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TodoistApi } from "@doist/todoist-api-typescript";

const api = new TodoistApi("14e22f56fadd08cdc9be1df7443ca10afaf40262");

const initialState = {
  projects: [],
  selectedProject: "",
  projectLoading: true,
  projectError: "",
};
export const fetchProjects = createAsyncThunk("project/fetchProjects", () => {
  return api.getProjects();
});

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects = [...state.projects, action.payload];
    },
    removeProject: (state, action) => {
      state.projects = state.projects.filter(
        (element) => element.id != action.payload
      );
    },
    updateProject: (state, action) => {
      state.projects = state.projects.map((element) =>
        element.id === action.payload.id ? action.payload : element
      );
    },
  },
  extraReducers: (builders) => {
    builders.addCase(fetchProjects.pending, (state) => {
      state.projectLoading = true;
    });
    builders.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projectLoading = false;
      state.projectError = "";
      state.projects = action.payload;
    });
    builders.addCase(fetchProjects.rejected, (state, action) => {
      state.projectLoading = false;
      state.projectError = action.payload;
      state.projects = [];
    });
  },
});

export default projectSlice.reducer;

export const { addProject, removeProject, updateProject } =
  projectSlice.actions;
