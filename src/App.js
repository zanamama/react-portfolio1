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
        <Route exact path="https://zanamama.github.io/">
          <AboutMe></AboutMe>
        </Route>
        <Route exact path="https://zanamama.github.io/portfolio">
          <Portfolio></Portfolio>
        </Route>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
