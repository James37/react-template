import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Test from "./components/Test";

const App = () => {
  return (
    <>
      <header>
        Header <nav>Nav</nav>
      </header>
      <main className="container mx-auto px-4">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/test" component={Test} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </Router>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default App;
