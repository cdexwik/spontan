import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  getDocs,
  docs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";

const initialState = {
  activitiesArray: [],
  currentUserActivitiesArray: [],
};

// add activity to activitiesArray
export const addActivityToFirestore = createAsyncThunk(
  "activities/addActivityToFirestore",
  async (activity) => {
    const addActivityRef = await addDoc(collection(db, "activities"), activity);
    const newActivity = { id: addActivityRef.id, activity };
    return newActivity;
  }
);

// delete activity from activitiesArray
export const deleteActivity = createAsyncThunk(
  "activities/deleteActivity",
  async (id) => {
    const activities = await getDocs(collection(db, "activities"));
    for (var snap of activities.docs) {
      if (snap.id === id) {
        await deleteDoc(doc(db, "activities", snap.id));
      }
    }
    return id;
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

export const fetchActivitiesFromUser = createAsyncThunk(
  "activities/fetchActivitiesFromUser",
  async (userId) => {}
);

/// const q = query(activitiesRef, where("userId", "==", user.uid));
/// const querySnapshot = await getDocs(q);
/// let data = [];
/// querySnapshot.forEach((doc) => {
/// data.push({ ...doc.data(), id: doc.id });

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
      })
      .addCase(deleteActivity.fulfilled, (state, action) => {
        state.activitiesArray = state.activitiesArray.filter(
          (activity) => activity.id !== action.payload
        );
      });
  },
});

export const {} = activities.actions;

export default activities.reducer;
