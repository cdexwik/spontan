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
  userActivitiesArray: [],
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

// fetch ALL activities
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

// fetch activities from ONE user
export const fetchUserActivities = createAsyncThunk(
  "activities/fetchUserActivities",
  async (userId) => {
    const querySnapshot = await getDocs(collection(db, "activities"));
    const activitiesByUser = querySnapshot.docs
      .filter((doc) => doc.data().userId === userId)
      .map((doc) => ({
        id: doc.id,
        activity: doc.data(),
      }));
    return activitiesByUser;
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
      })
      .addCase(fetchUserActivities.fulfilled, (state, action) => {
        state.userActivitiesArray = action.payload;
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
