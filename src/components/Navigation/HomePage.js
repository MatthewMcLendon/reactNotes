import { Link } from "react-router-dom";
import "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className="card secondary">
      <h2>Welcome to Planner!</h2>
      <p>A convient place for planning events and taking notes.</p>
      <button>
        <Link to={"/users"}>Get Started!</Link>
      </button>
    </div>
  );
}
