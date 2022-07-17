import "./App.css";
import { getUsers } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Welcome to React Redux Crash Course 2021</h1>
      <p>
        {users.map((res) => {
          console.log(res);
        })}
      </p>
    </div>
  );
}

export default App;
