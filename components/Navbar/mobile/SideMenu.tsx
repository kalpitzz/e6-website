"use client";
import Link from "next/link";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import DropdownIcon from "@/assets/icons/dropdown.svg";
import Image from "next/image";
import LightLogo from "@/assets/icons/logo-light.png";

import { AnimatePresence, motion } from "framer-motion";
import Buttons from "@/components/Buttons/Buttons";
import { usePathname } from "next/navigation";

const sidemenuItems = [
  {
    title: "Product",
    href: "",
    subMenus: [
      {
        title: "How we built e6data?",
        href: "/blogs/blog1",
      },
      {
        title: "Performance Benchmarks",
        href: "/blogs/blog1",
      },
      {
        title: "Deployment Options",
        href: "/blogs/blog1",
      },
      {
        title: "TCO Calculator",
        href: "/blogs/blog1",
      },
    ],
  },
  {
    title: "Technology",
    href: "",
    subMenus: [
      {
        title: "Overview",
        href: "/blogs/blog1",
      },
      {
        title: "How it works?",
        href: "/blogs/blog1",
      },
      {
        title: "Cloudprem Deployment",
        href: "/blogs/blog1",
      },
    ],
  },
  {
    title: "Use case Guide",
    href: "",
    subMenus: [
      {
        title: "Customer-facing Analytics",
        href: "/blogs/blog1",
      },
      {
        title: "Real-time Dashboarding",
        href: "/blogs/blog1",
      },
      {
        title: "Ad-hoc Reporting",
        href: "/blogs/blog1",
      },
    ],
  },

  {
    title: "Documentation",
    href: "https://docs.e6data.com/product-documentation",
  },
];

const MobileMenu = forwardRef((props, ref) => {
  const [showSubMenu, setShowSubMenu] = useState<string | null>(null);
  const [showSideMenu, setShowSideMenu] = useState<boolean | null>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (showSideMenu) setShowSideMenu(false);
    if (showSubMenu) setShowSubMenu(null);
  }, [pathname]);

  useImperativeHandle(ref, () => ({
    openSideMenu: () => {
      setShowSideMenu(true);
    },
    closeSideMenu: () => {
      setShowSideMenu(null);
    },
  }));

  return (
    <AnimatePresence>
      {showSideMenu && (
        <>
          <div
            className="h-screen w-screen fixed right-0 bg-black opacity-80"
            onClick={() => setShowSideMenu(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.5 }}
            exit={{ x: "100%" }}
            className=" h-full w-2/3 md:w-1/3 fixed right-0 bg-white"
          >
            <nav
              className="h-full min-h-full max-h-full "
              onClick={() => setShowSubMenu(null)}
            >
              <div className="relative w-full h-[10%] max-h-[10%] content-center border-b-2 overflow-hidden ">
                <Image
                  src={LightLogo}
                  alt="logo"
                  width={165}
                  height={50}
                  className="absolute top-1/2 left-1/2 transform translate-x-[-50%]  translate-y-[-50%] cursor-pointer"
                  style={{
                    margin: "auto",
                  }}
                />
              </div>
              <div className="h-[80%] min-h-[80%] max-h-[80%] pt-4 pb-2 space-y-4 overflow-auto">
                {sidemenuItems?.map((menuItem, index) => {
                  let randomId: string | null = index + menuItem?.title;
                  return (
                    <div key={index} className="font-medium">
                      {menuItem?.subMenus?.length ? (
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            if (menuItem?.subMenus?.length)
                              setShowSubMenu((prevId) => {
                                if (prevId == randomId) return null;
                                return randomId;
                              });
                          }}
                        >
                          <h5
                            className={`flex items-center justify-between pl-2 pr-2 py-1 cursor-pointer ${
                              showSubMenu === randomId ? "font-bold" : ""
                            }`}
                          >
                            {menuItem?.title}
                            <DropdownIcon
                              alt="[.]"
                              width={20}
                              height={20}
                              className={`${
                                showSubMenu === randomId
                                  ? "rotate-180"
                                  : "rotate-0"
                              }`}
                            />
                          </h5>
                          <div
                            id={randomId}
                            className={`${
                              showSubMenu === randomId
                                ? "block bg-[#dcdfe5] "
                                : "hidden"
                            } `}
                          >
                            {menuItem?.subMenus?.map((submenu) => {
                              return (
                                <Link
                                  href={submenu?.href || ""}
                                  className="block pl-6 pr-2 py-1 hover:text-primary-color"
                                >
                                  <h5>{submenu?.title}</h5>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        <Link
                          className="block px-2 py-1"
                          href={menuItem?.href || ""}
                        >
                          <h5>{menuItem?.title}</h5>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="w-full h-[10%] max-h-[10%] flex justify-center items-center p-4 border-t-2 ">
                <Buttons
                  variant="primary"
                  label="Start for Free"
                  btnclass="w-full !text-center max-md:!text-[16px]"
                  onClick={() => {
                    window?.Calendly?.initPopupWidget({
                      url: "https://calendly.com/e6data-product-demo/start-with-e6data",
                    });
                    return false;
                  }}
                />
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

export default MobileMenu;
