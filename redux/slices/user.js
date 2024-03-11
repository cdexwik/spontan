import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  getDocs,
  docs,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";

const initialState = {
  currentUser: null,
  isLoggedIn: false,
  currentUserData: {},
  currentUserFriends: [],
  users: [],
};

//fetchUserData
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (userId) => {
    try {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error("User data not found");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }
);

// fetch users
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    userData: doc.data(),
  }));
  return users;
});

// add user to users
export const addUserToFirestore = createAsyncThunk(
  "users/addUserToFirestore",
  async (userId, userData) => {
    await setDoc(doc(db, "users", userId), userData);
    return { userId, userData };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setCurrentUserData(state, action) {
      state.currentUserData = action.payload;
    },
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(addUserToFirestore.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.currentUserData = action.payload;
      });
  },
});

export const { setCurrentUser, setCurrentUserData, setLoggedIn } =
  userSlice.actions;

export default userSlice.reducer;
