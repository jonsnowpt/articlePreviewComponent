import React from "react";
import { Popover, Whisper, Button } from "rsuite";
import PreventOverflowContainer from "./PreventOverflowContainer";
import "../../src/styles.css";

const speaker = (
  <Popover className="whisperStyle">
    <div className="newGrid">
      <div className="textCont">SHARE</div>
      <div className="faceShare">2</div>
      <div className="twitterShare">3</div>
      <div className="pinterShare">1</div>
    </div>
  </Popover>
);

const AppPop = () => (
  <PreventOverflowContainer height={300}>
    {(getContainer) => (
      <Whisper trigger="hover" delayShow="400" speaker={speaker} enterable>
        <Button className="buttonShare"></Button>
      </Whisper>
    )}
  </PreventOverflowContainer>
);

export default AppPop;
