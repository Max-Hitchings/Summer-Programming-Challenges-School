import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Summer coding challenges</p>
        <button>
          <Link to="/treasure-hunt">treasure-hunt</Link>
        </button>
      </header>
      <div className="Main-menu-container">
        <div className="Main-menu-item"></div>
        <div className="Main-menu-item"></div>
        <div className="Main-menu-item"></div>
        <div className="Main-menu-item"></div>
        <div className="Main-menu-item"></div>
      </div>
    </div>
  );
}
