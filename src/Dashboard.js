import "./App.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Summer coding challenges</p>
        <button>
          <Link to="/treasure-hunt">treasure-hunt</Link>
        </button>
      </header>
    </div>
  );
}
