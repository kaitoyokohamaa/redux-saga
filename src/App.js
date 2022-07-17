import "./App.css";
import { getUsers } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Welcome to React Redux Crash Course 2021</h1>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users?.length > 0 && users?.map((res, i) => <h1 kye={i}>{res.name}</h1>)}
    </div>
  );
}

export default App;
