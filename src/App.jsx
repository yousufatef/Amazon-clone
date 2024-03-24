import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import NotFound from "./components/NotFound";
import { useEffect } from "react";
import { auth } from "./utils/firebase";
import { useAuth } from "./context/GlobalState";

const App = () => {
  const { dispatch } = useAuth();
  /*use this function to handle auth when user signIn or make register
   use dispatch method to save user data in reducer and 
   share it with context api.
  */
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
