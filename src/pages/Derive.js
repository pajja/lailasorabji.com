import React from "react";
import NavBar from "../components/nav-bar";
import "../styles/times-new-roman.css";
import "../styles/project-name.css";
import ViewerDerive from "../components/viewerDerive";
import DeriveComp1 from "../components/deriveComp1";
import DeriveComp2 from "../components/deriveComp2";
import DeriveComp3 from "../components/deriveComp3";
import DeriveComp4 from "../components/deriveComp4";
import DeriveComp5 from "../components/deriveComp5";
import DeriveComp6 from "../components/deriveComp6";
import DeriveComp7 from "../components/deriveComp7";

// composition 1: a walk
// composition 2: textures
// cmoposition 3: polaroids
// composition 4: oil pastel on paper
// composition 5: textures and ballpoint
// composition 6: combination of leaves
// composition 7: drawings

function Derive() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xxl-2">
          <NavBar />
        </div>
        <div className="col-xxl-8">
          <ViewerDerive
            composition1={<DeriveComp1 />}
            composition2={<DeriveComp2 />}
            composition3={<DeriveComp3 />}
            composition4={<DeriveComp4 />}
            composition5={<DeriveComp5 />}
            composition6={<DeriveComp6 />}
            composition7={<DeriveComp7 />}
          />
        </div>
        <div className="col-xxl-2 times-new-roman project-name">dérive</div>
      </div>
    </div>
  );
}

export default Derive;
