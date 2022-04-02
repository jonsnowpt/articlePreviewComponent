import "./styles.css";
import UserAvatar from "react-user-avatar";
import AppPop from "./components/popover/popover";
import React from "react";
import avatarMichelle from "./assets/avatar-michelle.jpg";

export default function App() {
  return (
    <div id="mainDiv" className="App">
      <div className="drawersTable">
        <div className="titleDiv">
          <h1 className="mainTtile">
            Best sports platforms!
          </h1>
        </div>
        <div className="paragDiv">
          <p>
            - <a href="https://www.betarena.com">Betarena</a>;
            - <a href="https://scores.betarena.com">Scores Betarena</a>;
            - <a href="https://apostas.betarena.com">Apostas Betarena</a>;
          </p>
        </div>
        <div className="grid">
          <div className="UserAvatar">
            <UserAvatar
              size="48"
              name="Michelle Appleton"
              src={avatarMichelle}
            />
          </div>
          <div className="userName">Michelle Appleton</div>
          <div className="buttonDiv">
            <AppPop />
          </div>
          {/*       <div className="buttonDivMobile">{/*           <ShowDiv /> </div> */}
        </div>
        <div className="clear"></div>
      </div>
      <div className="dateUser">28 Jun 2020</div>
    </div>
  );
}
