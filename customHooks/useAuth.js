import { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/user";

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        dispatch(setUser(user));
        //console.log("user from useAuth");
        //console.log(user);
      } else {
        setCurrentUser(null);
      }
    });
  });
  return currentUser;
};

export default useAuth;
