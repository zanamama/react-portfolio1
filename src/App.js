import AboutMe from "./components/aboutme";
import Head from "./components/head";
import Header from "./components/header";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Head></Head>
        <Header></Header>
        <Switch>
          <Route
            exact
            path="https://zanamama.github.io/react-portfolio2/"
            component={AboutMe}
          />
          <Route exact path="/portfolio/" component={Portfolio} />
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
