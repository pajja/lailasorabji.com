import React, { useState } from "react";
import "../styles/Home.css";
import Insta from "../components/instagram";
import { Link } from "react-router-dom";
import "../styles/nav-bar.css";
import homeImages from "../components/imagesHome";
import Magnifier from "../components/magnifier";
import "../styles/magnifier.css";

function Home() {
  const [background, setBackground] = useState(homeImages.backgroundImage);

  const imageList = [
    homeImages.backgroundImage,
    homeImages.geometryAndDecolonisationBackground,
    homeImages.assemblagesBackground,
    homeImages.chanceAndSequenceBackground,
    homeImages.deriveBackground,
    homeImages.futuresBackground,
    homeImages.womanhoodBackground,
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xxl-2 nav-bar">
          <nav>
            <ul>
              <li>
                <Link
                  onMouseEnter={() => setBackground(homeImages.backgroundImage)}
                  className="home"
                  to="/"
                >
                  Laila Sorabji
                </Link>
              </li>
              <li>
                <Link
                  onMouseEnter={() =>
                    setBackground(
                      homeImages.geometryAndDecolonisationBackground
                    )
                  }
                  className="page"
                  to="/geometry-and-decolonisation"
                >
                  geometry and decolonisation
                </Link>
              </li>
              <li>
                <Link
                  onMouseEnter={() =>
                    setBackground(homeImages.assemblagesBackground)
                  }
                  className="page"
                  to="/assemblages"
                >
                  assemblages
                </Link>
              </li>
              <li>
                <Link
                  onMouseEnter={() =>
                    setBackground(homeImages.chanceAndSequenceBackground)
                  }
                  className="page"
                  to="/chance-and-sequence"
                >
                  chance and sequence
                </Link>
              </li>
              <li>
                <Link
                  onMouseEnter={() =>
                    setBackground(homeImages.deriveBackground)
                  }
                  className="page"
                  to="/derive"
                >
                  dérive
                </Link>
              </li>
              <li>
                <Link
                  onMouseEnter={() =>
                    setBackground(homeImages.futuresBackground)
                  }
                  className="page"
                  to="/futures"
                >
                  futures
                </Link>
              </li>
              <li>
                <Link
                  onMouseEnter={() =>
                    setBackground(homeImages.womanhoodBackground)
                  }
                  className="page"
                  to="/womanhood"
                >
                  womanhood
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-xxl-8 col-background-home">
          {imageList.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Background ${index}`}
              className={`background-image-home ${
                background === image ? "visible" : ""
              }`}
            />
          ))}
        </div>
        <div className="col-xxl-2 ig-logo">
          <Insta />
        </div>
      </div>
    </div>
  );
}

export default Home;
