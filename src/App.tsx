import * as React from "react";
import "./styles.css";
import UserAvatar from "react-user-avatar";
import PopoverDemo from "./popover";

export default function App() {
  return (
    <div id="mainDiv" className="App">
      <div className="drawersTable">
        <div className="titleDiv">
          <h1 className="mainTtile">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
        </div>
        <div className="paragDiv">
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </div>
        <div className="grid">
          <div className="UserAvatar">
            <UserAvatar
              size="48"
              name="Will Binns-Smith"
              src="./avatar-michelle.jpg"
            />
          </div>
          <div className="userName">Michelle Appleton</div>
          <div className="buttonDiv">
            <button className="buttonShare"></button>
          </div>
        </div>
        <div className="clear"></div>
      </div>
      <div className="dateUser">28 Jun 2020</div>
      <div>
        <PopoverDemo />
      </div>
    </div>
  );
}
