import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui/dist/semantic.min.css";

export default class MenuEx extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="editorials"
          active={activeItem === "editorials"}
          content="Home"
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name="reviews"
          active={activeItem === "reviews"}
          content="About"
          onClick={this.handleItemClick}
        />
        

        <Menu.Item
          name="upcomingEvents"
          active={activeItem === "upcomingEvents"}
          content="Contact Us"
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}