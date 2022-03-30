import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
        <ul className="header">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/SEPractice">Select the Practice</a>
          </li>
          <li>
            <a href="/SubmitArticle">Submit an Article</a>
          </li>
        </ul>
        <div className="content"></div>
      </div>
    </Router>
  );
}

export default App;
