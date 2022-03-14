import React from "react";
import { Menu } from "semantic-ui-react";
import { useRouter } from "next/router";

export default function Navbar() {
  // hooks
  const router = useRouter();

  // handles go root page
  const handleGoHome = () => {
    router.push("/");
  };

  // handles go to stack page
  const handleGoStack = () => {
    router.push("/stack");
  };

  return (
    <>
      <Menu stackable>
        <Menu.Item>
          <img alt="logo" src="/red-pepper.png" />
        </Menu.Item>

        <Menu.Item name="home" onClick={() => handleGoHome("home")}>
          Buscador
        </Menu.Item>

        <Menu.Item name="stack" onClick={() => handleGoStack("stack")}>
          Stack Utilizado
        </Menu.Item>
      </Menu>
    </>
  );
}
