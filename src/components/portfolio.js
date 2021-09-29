import yellow1 from "../assets/images/yellow1.jpeg";
import yellow2 from "../assets/images/yellow2.jpeg";
import yellow3 from "../assets/images/yellow3.jpeg";
import yellow4 from "../assets/images/yellow4.jpeg";
import yellow5 from "../assets/images/yellow5.jpeg";
import yellow6 from "../assets/images/yellow6.jpeg";

const Portfolio = () => {
  return (
    <>
      <div class="container-fluid bg-3 text-center" id="project-section">
        <h3>Click-Enjoy</h3>
        <br />
        <div class="row">
          <div class="col-sm-3">
            <h4>Weather Dashboard</h4>
            <a href="https://zanamama.github.io/weather-dashboard/">
              <img
                src={yellow2}
                class="img-responsive"
                style={{ width: "100%" }}
                alt="Weather dashboard"
              />
            </a>
          </div>
          <div class="col-sm-3">
            <h4>Staffing</h4>
            <a href="http://intercomstaffing.com/">
              <img
                src={yellow6}
                class="img-responsive"
                style={{ width: "100%" }}
                alt="Staffing Website made for my first client in 2019"
              />
            </a>
          </div>
          <div class="col-sm-3">
            <h4>AlgoDish</h4>
            <a href="https://live-pr3-algodish.herokuapp.com/">
              <img
                src={yellow6}
                class="img-responsive"
                style={{ width: "100%" }}
                alt="AlgoDish"
              />
            </a>
          </div>
          <div class="col-sm-3">
            <h4>App for Depression</h4>
            <a href="https://dobbs96.github.io/The-Best-of-Me-Project/">
              <img
                src={yellow1}
                class="img-responsive"
                style={{ width: "100%" }}
                alt="app to help with depression"
              />
            </a>
          </div>
        </div>
      </div>
      <br />

      <div class="container-fluid bg-3 text-center">
        <div class="row">
          <div class="col-sm-3">
            <h4>Password Generator</h4>
            <a href="https://zanamama.github.io/Password-Generator/">
              <img
                src={yellow1}
                class="img-responsive"
                style={{ width: "100%" }}
                alt="password generator"
              />
            </a>
          </div>
          <div class="col-sm-3">
            <h4>Parker App</h4>
            <a href="https://parker-live.herokuapp.com/">
              <img
                src={yellow3}
                class="img-responsive"
                style={{ width: "100%" }}
                alt="street parking app for crowded cities"
              />
            </a>
          </div>
          <div class="col-sm-3">
            <h4>Tech Quiz Game</h4>
            <a href="https://zanamama.github.io/CodeQuiz/">
              <img
                src={yellow4}
                class="img-responsive"
                style={{ width: "100%" }}
                alt="zana mathuthu's tech quiz game"
              />
            </a>
          </div>
          <div class="col-sm-3">
            <h4>Scheduler</h4>
            <a href="https://zanamama.github.io/Workday-Scheduler/">
              <img
                src={yellow5}
                class="img-responsive"
                style={{ width: "100%" }}
                alt="scheduler"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
