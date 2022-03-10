import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { useState } from "react";

export default function Navbar() {

    // state
    const [selected, setSelected] = useState("")

    return (
      <>
        <Menu stackable inverted color={"teal"}>
          <Menu.Item>
            <img alt="logo" src="/red-pepper.png" />
          </Menu.Item>

          <Menu.Item
            name="home"
            active={selected === "home"}
            onClick={() => setSelected("home")}
          >
            Home
          </Menu.Item>

          <Menu.Item
            name="search"
            active={selected === "search"}
            onClick={() => setSelected("search")}
          >
            Search
          </Menu.Item>

          <Menu.Item
            name="api-documentation"
            active={selected === "api-documentation"}
            onClick={() => setSelected("api-documentation")}
          >
            API Documentation
          </Menu.Item>
        </Menu>
      </>
    );
}
