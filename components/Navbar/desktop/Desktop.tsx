import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./TopMenu";
import Image from "next/image";
import { cn } from "@/utils/cn";
import LightLogo from "@/assets/icons/logo-light.png";
import Buttons from "@/components/Buttons/Buttons";
import { useRouter } from "next/navigation";

function Desktop({}) {
  const [active, setActive] = useState<string | null>(null);
  const router = useRouter();

  return (
    <nav
      className={cn(
        "hidden lg:flex  h-[var(--desktop-navbar-height)] max-h-[var(--desktop-navbar-height)] fixed top-0 w-screen flex-wrap items-center justify-around z-50 bg-white"
      )}
    >
      <div className="w-[15%] max-w-full">
        <Image
          src={LightLogo}
          alt="logo"
          width={145}
          height={34}
          className="cursor-pointer"
          style={{
            objectFit: "contain",
            margin: "auto",
          }}
          onClick={() => router?.push("/")}
        />
      </div>

      <Menu className="w-[60%] h-full " setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Product">
          <div className="flex flex-col space-y-1 ">
            <HoveredLink href="/blogs/blog1">How we built e6data?</HoveredLink>
            <HoveredLink href="/blogs/blog1">
              Performance Benchmarks
            </HoveredLink>
            <HoveredLink href="/blogs/blog1">Deployment Options</HoveredLink>
            <HoveredLink href="/blogs/blog1">TCO Calculator</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Technology">
          <div className="flex flex-col space-y-1 ">
            <HoveredLink href="/blogs/blog1">Overview</HoveredLink>
            <HoveredLink href="/blogs/blog1">How it works?</HoveredLink>
            <HoveredLink href="/blogs/blog1">Cloudprem Deployment</HoveredLink>
            <HoveredLink href="/blogs/blog1">ROI Calculator</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Use case Guide">
          <div className="flex flex-col space-y-1 ">
            <HoveredLink href="/blogs/blog1">
              Customer-facing Analytics
            </HoveredLink>
            <HoveredLink href="/blogs/blog1">
              Real-time Dashboarding
            </HoveredLink>
            <HoveredLink href="/blogs/blog1">Ad-hoc Reporting</HoveredLink>
          </div>
        </MenuItem>
      </Menu>

      <div className="w-[25%] h-full flex items-center justify-end ">
        <Buttons
          variant="primary-3"
          label="Documentation"
          btnclass=" mr-4"
          onClick={() => {
            router?.push("https://docs.e6data.com/product-documentation");
          }}
        />
        <Buttons
          variant="primary"
          label="Start for Free"
          btnclass=" mr-8"
          onClick={() => {
            window?.Calendly?.initPopupWidget({
              url: "https://calendly.com/e6data-product-demo/start-with-e6data",
            });
            return false;
          }}
        />
      </div>
    </nav>
  );
}

export default Desktop;
