"use client";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import HeroSection from "@/components/HeroSection/HeroSection";
import InfiniteMovingCards from "@/components/InfiniteMovingCards/InfiniteMovingCards";

import React from "react";

import Tech1 from "@/assets/tech-stack/Frame.svg";
import Tech2 from "@/assets/tech-stack/Frame-1.svg";
import Tech3 from "@/assets/tech-stack/Frame-2.svg";
import Tech4 from "@/assets/tech-stack/Frame-3.svg";
import Tech5 from "@/assets/tech-stack/Frame-4.svg";
import Tech6 from "@/assets/tech-stack/Frame-5.svg";
import Tech7 from "@/assets/tech-stack/Frame-6.svg";

import Cust1 from "@/assets/customer-logo/Frame.svg";
import Cust2 from "@/assets/customer-logo/Frame-1.svg";
import Cust3 from "@/assets/customer-logo/Frame-2.svg";
import Cust4 from "@/assets/customer-logo/Frame-3.svg";
import Cust5 from "@/assets/customer-logo/Frame-4.svg";
import Cust6 from "@/assets/customer-logo/Frame-5.svg";

import CloudIcon from "@/assets/icons/cloud.svg";
import MultiFolderIcon from "@/assets/icons/multi-folder.svg";
import EquilizerIcon from "@/assets/icons/equilizer.svg";
import GradientBackground from "@/assets/icons/gradient-back.svg";
import Buttons from "@/components/Buttons/Buttons";
import Diag2 from "@/assets/diagrams/diag2.svg?url";
import FolderIcon from "@/assets/icons/folder.svg";
import InternetIcon from "@/assets/icons/internet.svg";
import CatalogIcon from "@/assets/icons/catalog.svg";
import ConnectorIcon from "@/assets/icons/connecter.svg";
import CardFlowSection from "@/components/sections/landing/CardFlowSection";
import CoverFlowSection from "@/components/sections/landing/CoverFlowSection";

function page() {
  const techBelt = [
    <Tech1 />,
    <Tech2 />,
    <Tech3 />,
    <Tech4 />,
    <Tech5 />,
    <Tech6 />,
    <Tech7 />,
  ];

  const customerBelt = [
    <Cust1 />,
    <Cust2 />,
    <Cust3 />,
    <Cust4 />,
    <Cust5 />,
    <Cust6 />,
  ];

  const certificationBelt = [];

  return (
    <main className="w-full h-full">
      {/* section 1 */}
      <HeroSection highlightCls={"relative"} />
      <h6 className="text-text-color10 m-auto w-fit font-semibold">
        Current Data Stacks
      </h6>
      <InfiniteMovingCards
        items={techBelt}
        direction="right"
        speed="slow"
        pauseOnHover={false}
        blendWithBackground
        itemGap={"4rem"}
        className=" py-6"
      />
      {/* banner section */}
      <div className="w-full h-full grid md:grid-cols-5 max-sm:gap-6 content-center text-white bg-[#202020] p-2 md:p-4 xl:px-12 xl:py-10 my-4 md:my-12">
        <div className="md:col-span-2 content-center xl:px-12">
          <h2 className="max-md:text-center">
            Performance, Efficiency and ROI
          </h2>
        </div>
        <div className="md:col-span-3 grid grid-cols-3">
          <div className="text-center md:pt-10 lg:pt-0">
            <h3 className="lg:text-[70px] font-bold">10X</h3>
            <h5 className="w-2/3 m-auto font-medium">
              Faster Higher Throughput
            </h5>
          </div>
          <div className="text-center md:pt-10 lg:pt-0 border-l-2 border-r-2 border-[#807e79] ">
            <h3 className="lg:text-[70px] font-bold">60%</h3>
            <h5 className="w-2/3 m-auto font-medium">Lower TCO</h5>
          </div>
          <div className="text-center md:pt-10 lg:pt-0">
            <h3 className="lg:text-[70px] font-bold">Zero</h3>
            <h5 className="w-2/3 m-auto font-medium">Data Movement</h5>
          </div>
        </div>
      </div>
      {/*  section 2 */}
      <div className="relative w-full h-full mt-12 pb-12 space-y-12">
        <div className="absolute bottom-0 left-0 w-full h-3/5 bg-[#F7F8FF]" />
        <div className="relative w-[95%] lg:w-[85%] m-auto px-2 space-y-4">
          <h2 className="font-semibold ">
            e6data Seamlessly Fits Into Your Existing Data Stack
          </h2>
          <h6 className="pr-5 max-h-[20rem] overflow-auto">
            e6data is open-source friendly with universal interoperability. We
            are compatible with all open lakehouse table formats and lakehouse
            interoperability formats.
          </h6>
        </div>

        <div className="relative w-full space-y-8">
          <div className="w-[95%] lg:w-[65%] h-full m-auto bg-white p-2 lg:p-8 shadow-t3 rounded-2xl">
            <Image alt="" src={Diag2} className="m-auto w-full h-full" />
          </div>

          <div className="relative w-full h-full grid md:grid-cols-2 lg:grid-cols-5 gap-10 text-center px-4 md:!mt-12">
            <div className="w-full h-max flex flex-col items-center space-y-3 ">
              <FolderIcon />
              <h3 className="font-semibold">Querying Language</h3>
              <span>Standard ANSI SQL++</span>
            </div>
            <div className="w-full h-max flex flex-col items-center space-y-3 ">
              <FolderIcon />
              <h3 className="font-semibold">Open Table Formats</h3>
              <span>Delta, Iceberg, Hudi, Hive</span>
            </div>
            <div className="w-full h-max flex flex-col items-center space-y-3 ">
              <InternetIcon />
              <h3 className="font-semibold">Open file format</h3>
              <span>Parquet, ORC, AVRO, CSV, JSON</span>
            </div>
            <div className="w-full h-max flex flex-col items-center space-y-3 ">
              <ConnectorIcon />
              <h3 className="font-semibold">Standard Connectors</h3>
              <span>JDBC, ODBC, Python</span>
            </div>
            <div className="w-full h-max flex flex-col items-center space-y-3 ">
              <CatalogIcon />
              <h3 className="font-semibold">Open Catalog</h3>
              <span>Hive, Glue, Delta, Unity</span>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className=" px-6 xl:px-12 pt-12 2xl:w-[80%] 2xl:m-auto">
        <CardFlowSection />
      </div>
      <h6 className="px-4 md:px-12 w-full text-center text-text-color10 font-semibold ">
        TRUSTED BY ENTERPRISE COMPANY
      </h6>
      <InfiniteMovingCards
        items={customerBelt}
        direction="right"
        speed="slow"
        pauseOnHover={false}
        blendWithBackground
        className=" max-md:border-b-2 py-6 pb-16"
      />
      {/* section 4 */}
      <div className="2xl:w-[80%] 2xl:m-auto rounded-2xl overflow-hidden">
        <CoverFlowSection variant={2} />
      </div>
      {/* section 5 */}
      <div className=" px-6 xl:px-12 pt-12 flex flex-col space-y-12 2xl:w-[80%] 2xl:m-auto ">
        <div className="w-full h-full flex flex-col">
          <h2 className="font-semibold">Secure, Private, Governed</h2>
          <h6>
            e6data offers the best in class enterprise-grade cloud-prem model
          </h6>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row overflow-hidden rounded-2xl shadow-t1 ">
          <div className="lg:w-2/3 max-w-2/3 min-h-96  bg-indigo-100">
            {/* image area */}
          </div>
          <div className="lg:w-1/3 max-w-1/3 h-full grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 lg:grid-cols-1 lg:grid-rows-3  p-12 self-center max-sm:text-center space-y-4 md:space-y-0 md:space-x-4 lg:space-x-0 lg:space-y-6  ">
            <div className="w-fit">
              <CloudIcon className="max-md:m-auto" />
              <h4 className="font-semibold mt-2">
                Deploys within your cloud VPC / Data Boundary
              </h4>
            </div>
            <div className="w-fit">
              <MultiFolderIcon className="max-md:m-auto" />
              <h4 className="font-semibold mt-2">
                Your data never leaves your object storage
              </h4>
            </div>
            <div className="w-fit">
              <EquilizerIcon className="max-md:m-auto" />
              <h4 className="font-semibold mt-2">
                Powerful, fully customizable control & guardrails
              </h4>
            </div>
          </div>
        </div>
      </div>
      <h6 className=" w-full px-12 mt-16 text-text-color10 text-center font-semibold ">
        CERTIFICATIOINS
      </h6>
      <InfiniteMovingCards
        items={customerBelt}
        direction="right"
        speed="slow"
        pauseOnHover={false}
        blendWithBackground
        className=" max-md:border-b-2 py-6"
      />
      {/* section 6 */}

      <div className="relative w-[95%] xl:w-[80%] m-auto my-8 px-4 py-8 md:px-20 md:py-16 space-y-6 text-center content-center rounded-2xl bg-gradient-to-b  to-[#3f00a5]  from-[#040744] overflow-hidden">
        <GradientBackground className="absolute bottom-0 right-[-70%] md:right-0 h-full" />
        <div className="relative z-10 space-y-4  content-center">
          <h2 className=" font-bold md:leading-[60px] text-white">
            Try e6data Now! and Unlock your high performance analytics use case
          </h2>
          <h6 className=" font-medium text-white">
            50-80% Cost Savings over Snowflake, Databricks, Athena, Starburst
          </h6>
        </div>
        <div className="relative w-1/2 md:w-2/3 lg:w-1/2 grid md:grid-cols-2 m-auto gap-4 content-center">
          <Buttons
            variant="primary"
            label="Start for Free"
            btnclass="w-full md:text-[16px] xl:text-[18px] !text-black !bg-white font-semibold "
            onClick={() => {
              window?.Calendly?.initPopupWidget({
                url: "https://calendly.com/e6data-product-demo/start-with-e6data",
              });
              return false;
            }}
          />
          <Buttons
            variant="primary-3"
            label="Request Demo"
            btnclass="w-full  md:text-[16px] xl:text-[18px] !border-2 !border-white font-semibold !text-white bg-[#4001A6]"
            onClick={() => {
              window?.Calendly?.initPopupWidget({
                url: "https://calendly.com/e6data-product-demo/product-demo",
              });
              return false;
            }}
          />
        </div>
      </div>
    </main>
  );
}

export default page;
