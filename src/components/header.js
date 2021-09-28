const Header = () => {
  return (
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a
            class="navbar-brand"
            href="https://www.linkedin.com/in/zanamathuthu"
          >
            Zana Mathuthu's Professional Portfolio
          </a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="https://zanamama.github.io/Portfolio/">Home</a>
            </li>
            <li>
              <a href="#project-section">About</a>
            </li>
            <li>
              <a href="assets/docs/Zana-Mathuthu-Resume-2021.pdf">Resume</a>
            </li>
            <li>
              <a href="https://calendly.com/zana-m/15min">Schedule Call</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
