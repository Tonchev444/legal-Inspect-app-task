import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_LAST_FILES } from "../consts/consts";

const initialState = {
  activeDocument: INITIAL_LAST_FILES[INITIAL_LAST_FILES.length - 1],
  uploadProgress: 0,
  documents: INITIAL_LAST_FILES,
  aiSummaryText: `Clarify the term "limited license" or replace with "non-exclusive use
          right"`,
};

const fileSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {
    startUpload: (state, action) => {
      state.activeDocument = action.payload;
      state.uploadProgress = 0;
    },
    updateUploadProgress: (state, action) => {
      state.uploadProgress = action.payload;
    },
    finishUpload: (state, action) => {
      state.uploadProgress = 100;
      state.documents = [action.payload, ...state.documents];
    },
    updateSummaryText: (state, action) => {
      state.aiSummaryText = action.payload;
    },
  },
});

export const {
  startUpload,
  updateUploadProgress,
  finishUpload,
  updateSummaryText,
} = fileSlice.actions;

export default fileSlice.reducer;
