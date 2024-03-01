import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

const initialState = {
  activitiesArray: [],
};

// add activity
export const addActivityToFirestore = createAsyncThunk(
  "activities/addActivityToFirestore",
  async (activity) => {
    const addActivityRef = await addDoc(collection(db, "activities"), activity);
    const newActivity = { id: addActivityRef.id, activity };
    return newActivity;
  }
);

// fetch activities
export const fetchActivities = createAsyncThunk(
  "activities/fetchActivities",
  async () => {
    const querySnapshot = await getDocs(collection(db, "activities"));
    const allActivities = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      activity: doc.data(),
    }));
    return allActivities;
  }
);

const activities = createSlice({
  name: "activities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addActivityToFirestore.fulfilled, (state, action) => {
        state.activitiesArray.push(action.payload);
      })
      .addCase(fetchActivities.fulfilled, (state, action) => {
        state.activitiesArray = action.payload;
      });
  },
});

export const {} = activities.actions;

export default activities.reducer;
