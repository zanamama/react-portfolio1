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
        <Route path="/">
          <AboutMe></AboutMe>
        </Route>
        <Route path="/portfolio">
          <Portfolio></Portfolio>
        </Route>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
