import { Routes, Route } from "react-router-dom";
import Root from "./components/Routes/Root";
import ErrorPage from "./components/Routes/ErrorPage";
import NoteRoute from "./components/Routes/NoteRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}></Route>
      <Route path="/notes" element={<NoteRoute />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
