import Popover from "react-simple-popover";
import React, { Component } from "react";

class PopoverDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick = (e) => {
    this.setState({ open: !this.state.open });
  };

  handleClose = (e) => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <a
          href="#"
          className="button"
          ref={(node) => {
            this.target = node;
          }}
          onClick={this.handleClick}
        >
          Popover
        </a>
        <Popover
          placement="left"
          container={this}
          target={this.target}
          show={this.state.open}
          onHide={this.handleClose}
        >
          <p>This is popover</p>
        </Popover>
      </div>
    );
  }
}

export default PopoverDemo;
