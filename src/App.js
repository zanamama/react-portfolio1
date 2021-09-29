import AboutMe from "./components/aboutme";
import Head from "./components/head";
import Header from "./components/header";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Head></Head>
        <Header></Header>
        <Route exact path="/">
          <AboutMe></AboutMe>
        </Route>
        <Route
          exact
          path="https://zanamama.github.io/react-portfolio2/portfolio"
        >
          <Portfolio></Portfolio>
        </Route>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
