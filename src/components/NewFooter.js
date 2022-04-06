
import React from "react";
import "./NewFooter.css";

function NewFooter() {
  return (
    <div className="main-footer">
      <div className = "left">
        <div className = "text">
          H-Net: Humanities & Social Sciences Online
          <br></br>
          Copyright © 1993 - 2021.
          <br></br>
         This work is licensed under a Creative Commons Attribution-Noncommercial-No Derivative Works 3.0 United States License.
         <br></br>
         Michigan State University Department of History
         </div>
      </div>
      <div className = "right">
        <img src = 'historylogo.jpg' id = "historylogofooter" alt = "msu footer"></img>
        <img src = 'hwhitelogo.png' id="hnetlogofooter" alt = "hnet footer"></img>
      </div>
    </div>
  );
}

export default NewFooter;
