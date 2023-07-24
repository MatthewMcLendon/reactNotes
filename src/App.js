import { Routes, Route } from "react-router-dom";
import Root from "./components/Routes/Root";
import ErrorPage from "./components/Routes/ErrorPage";
import NoteRoute from "./components/Routes/NoteRoute";
import NavBar from "./components/Navigation/Navbar";
import CalendarRoute from "./components/Routes/CalendarRoute";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/notes" element={<NoteRoute />}></Route>
        <Route path="/calendar" element={<CalendarRoute />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
