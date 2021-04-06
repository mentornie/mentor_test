import "./App.css";
import Hamburger from "./components/Hamburger";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Introduction from "./components/Pages/Introduction";
import Help from "./components/Pages/Help";

function App() {
  return (
    <div >
      <Router>
        <Hamburger />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Introduction} />
            <Route path="/introduction" component={Introduction} />
            <Route path="/help" component={Help} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;