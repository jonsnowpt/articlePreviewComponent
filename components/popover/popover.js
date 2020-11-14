import { Popover, Whisper, Button } from "rsuite";
import { PreventOverflowContainer } from "./PreventOverflowContainer";

const speaker = (
  <Popover title="Title" style={{ width: 200 }}>
    <p>This is a defalut Popover </p>
    <p>Content</p>
  </Popover>
);

const AppPop = () => (
  <PreventOverflowContainer height={300}>
    {(getContainer) => (
      <Whisper
        preventOverflow
        trigger="click"
        container={getContainer}
        speaker={speaker}
        placement="auto"
      >
        <Button appearance="primary">Click</Button>
      </Whisper>
    )}
  </PreventOverflowContainer>
);

/*
const PopTest = () => {
  return <AppPop />;
};
*/

export default AppPop;
