"use client";
import LightLogo from "@/assets/icons/logo-light.png";
import BurgerMenu from "@/assets/icons/burger-menu.svg";
import React, { useRef } from "react";
import SideMenu from "./SideMenu";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Mobile() {
  const sideMenuRef: any = useRef(null);
  const router = useRouter();
  return (
    <nav className="z-50 fixed top-0 lg:hidden w-screen h-[var(--mobile-navbar-height)] max-h-[var(--mobile-navbar-height)] flex justify-between bg-white">
      <Image
        src={LightLogo}
        alt="logo"
        width={130}
        className="cursor-pointer"
        style={{ objectFit: "cover" }}
        onClick={() => router?.push("/")}
      />

      <BurgerMenu
        onClick={() => sideMenuRef?.current?.openSideMenu()}
        alt="side-menu"
        width={50}
        className="cursor-pointer"
        style={{
          objectFit: "contain",
          padding: "5px",
        }}
      />
      {/* sliding side menu */}
      <SideMenu ref={sideMenuRef} />
    </nav>
  );
}
