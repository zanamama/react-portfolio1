import AboutMe from "./components/aboutme";
import Head from "./components/head";
import Header from "./components/header";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = (clickedPage) => {
    switch (clickedPage) {
      case "About":
        return <AboutMe></AboutMe>;
      case "Portfolio":
        return <Portfolio></Portfolio>;
    }
  };

  // sent down as a prop to children to change state
  const navigatePage = (clickedPage) => {
    return setCurrentPage(clickedPage);
  };

  return (
    <>
      <Head></Head>
      <Header navigatePage={navigatePage}></Header>
      {renderPage(currentPage)}
      <Footer></Footer>
    </>
  );
}

export default App;
