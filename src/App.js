import "./App.css";
import { getUsers } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useEffects } from "react";
function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className="App">
      <h1>Welcome to React Redux Crash Course 2021</h1>
    </div>
  );
}

export default App;
