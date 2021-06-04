import { Component } from "react";

function Container(props) {
    return(
        <div className="container">
            {props.children}
        </div>
    )
}

const NavLink = function(props) {
    return (
      <a className="nav-link" href={props.href} >
        {props.text} 
        {props.current ? <span className="sr-only">(current)</span> : ''}
      </a>
    ); 
}

function HamButton(props) {
    return (
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    );
}

function Navigation(props) {
    return (
      <nav className="navbar navbar-expand-lg">
        <Container>
          <a className="navbar-brand" href="index.html">
            <h2>
              Sixteen <em>Clothing</em>
            </h2>
          </a>
          <HamButton />
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink text="Home" href="index.html" current={true} />
              </li>
              <li className="nav-item">
                <NavLink text="Our Products" href="products.html" />
              </li>
              <li className="nav-item">
                <NavLink text="About Us" href="about.html" />
              </li>
              <li className="nav-item">
                <NavLink text="Contact Us" href="contact.html" />
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    );
}

class Header extends Component {
    render() {
        return (
          <header className="">
            <Navigation />
          </header>
        );
    }
}

export default Header