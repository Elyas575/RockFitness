import React from "react";

function Header() {
  return (
    <header>
      <div className="container container-flex">
        <div className="site-title">
          <h1
            style={{
              fontFamily: "Lora, serif",
              fontWeight: 400,
              color: "#143774",
              marginTop: "1em",
            }}
          >
            RockFitness Heavy Weights
          </h1>
          <p
            className="subtitle"
            style={{
              fontWeight: 700,
              color: "#1792d2",
              fontSize: "0.75rem",
              margin: 0,
            }}
          >
            Affordable, Durable, and High-Quality
          </p>
        </div>

        <nav>
          <ul>
            <li>
              <a
                href="#"
                className="current-page"
                style={{ marginLeft: "2em", borderBottom: "1px solid #707070" }}
              >
                {" "}
                Home{" "}
              </a>
            </li>
            <li>
              <a href="#" style={{ marginLeft: "2em" }}>
                {" "}
                Contact Us{" "}
              </a>
            </li>
            <li>
              <a href="#" style={{ marginLeft: "2em" }}>
                {" "}
                Delivery for FREE!{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
