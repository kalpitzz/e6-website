"use client";
import React from "react";
import NotFoundIcon from "@/assets/icons/40-not-found.svg?url";
import Buttons from "@/components/Buttons/Buttons";
import HighlightGrid from "@/components/animate/HighlightGrid";
import { useRouter } from "next/navigation";
import Image from "next/image";

function NotFound() {
  const router = useRouter();

  return (
    <div className="relative w-screen h-screen">
      <HighlightGrid className="!absolute top-0 left-0 w-screen h-screen " />
      <div className="relative w-full h-full max-w-full flex flex-col justify-center items-center space-y-12">
        <Image alt="" src={NotFoundIcon} />

        <h1 className="font-medium">Sorry, Page Not Found</h1>
        <div className="grid md:grid-cols-2 gap-10">
          <Buttons
            label="Continue to homepage"
            variant="primary"
            btnclass="md:text-[18px]"
            onClick={() => router.push("/")}
          />
          <Buttons
            label="Contact Support"
            variant="primary-3"
            btnclass="md:text-[18px]"
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
