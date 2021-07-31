import "./App.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Summer coding challenges</p>
        <div>
          <button>
            <Link to="/treasure-hunt">treasure-hunt</Link>
          </button>
          <button>
            <Link to="/10-seconds">guess 10 seconds</Link>
          </button>
        </div>
      </header>
    </div>
  );
}
