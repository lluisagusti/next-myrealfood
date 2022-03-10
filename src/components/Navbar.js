import React from "react";
import { Menu } from "semantic-ui-react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  // hooks
  const router = useRouter();

  // state
  const [selected, setSelected] = useState("");

  const handleGoHome = () => {
    setSelected("home")
    router.push("/");
  };

  return (
    <>
      {/* <Menu stackable inverted color={"teal"}> */}
      <Menu stackable>
        <Menu.Item>
          <img alt="logo" src="/red-pepper.png" />
        </Menu.Item>

        <Menu.Item
          name="home"
          active={selected === "home"}
          onClick={() => handleGoHome("home")}
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
