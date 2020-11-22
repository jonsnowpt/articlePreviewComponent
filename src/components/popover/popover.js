import React from "react";
import { Popover, Whisper, Button } from "rsuite";
import PreventOverflowContainer from "./PreventOverflowContainer";
import "../../../src/styles.css";
import facebookShare from "../../assets/icon-facebook.svg";
import twitterShare from "../../assets/icon-twitter.svg";
import pinterkShare from "../../assets/icon-pinterest.svg";

const speaker = (
  <Popover className="arrow_box">
    <div className="newGrid">
      <div className="textCont">SHARE</div>
      <div className="faceShare">
        <img src={facebookShare} alt="Facebook Share" />
      </div>
      <div className="twitterShare">
        <img src={twitterShare} alt="Facebook Share" />
      </div>
      <div className="pinterShare">
        <img src={pinterkShare} alt="Facebook Share" />
      </div>
    </div>
  </Popover>
);

const AppPop = () => (
  <PreventOverflowContainer height={300}>
    {(getContainer) => (
      <Whisper trigger="click" delayShow="400" speaker={speaker} enterable>
        <Button className="buttonShare"></Button>
      </Whisper>
    )}
  </PreventOverflowContainer>
);

export default AppPop;
