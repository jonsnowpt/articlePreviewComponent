import React from "react";
import { Popover, Whisper, Button } from "rsuite";
import PreventOverflowContainer from "./PreventOverflowContainer";
import "../../src/styles.css";

const speaker = (
  <Popover className="whisperStyle">
    <div class="newGrid">
      <div class="textCont">SHARE</div>
      <div class="faceShare">2</div>
      <div class="twitterShare">3</div>
      <div class="pinterShare">1</div>
    </div>
  </Popover>
);

const AppPop = () => (
  <PreventOverflowContainer height={300}>
    {(getContainer) => (
      <Whisper trigger="hover" delayShow="400" speaker={speaker} enterable>
        <Button appearance="primary">Click</Button>
      </Whisper>
    )}
  </PreventOverflowContainer>
);

export default AppPop;
