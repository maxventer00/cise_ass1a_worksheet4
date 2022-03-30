import logo from "./logo.svg";
import "./App.css";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
        <ul className="header">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/SEPractice">Select the Practice</NavLink>
          </li>
          <li>
            <NavLink to="/SubmitArticle">Submit an Article</NavLink>
          </li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/SEPractice" component={SEPractice} />
          <Route path="/SubmitArticle" component={SubmitArticle} />
        </div>
      </div>
    </Router>
  );
}

export default App;
