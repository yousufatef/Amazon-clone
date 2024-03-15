import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<h1>Page Not Found!</h1>} />
      </Routes>
    </div>
  );
};

export default App;
