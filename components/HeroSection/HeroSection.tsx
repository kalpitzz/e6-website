"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Buttons from "../Buttons/Buttons";
import HighlightGrid from "../animate/HighlightGrid";
import RightArrow from "@/assets/icons/right-arrow.svg";
import SupportPerson from "@/assets/icons/support-person.svg";

function HeroSection(props: any) {
  return (
    <HighlightGrid className={props?.highlightCls}>
      <div className="w-screen text-center h-[calc(100vh-15rem)] landscape:h-fit md:h-[calc(100vh-12rem)]  lg:landscape:h-[calc(100vh-11rem)] xl:landscape:h-[calc(100vh-13rem)] space-y-8 xl:space-y-12 content-center">
        <Swiper
          speed={2000}
          allowTouchMove={false}
          loop={true}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            pauseOnMouseEnter: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div>
              <h1 className="w-[95%] md:w-[80%] lg:w-full m-auto font-semibold">
                <strong className="text-[20px] md:text-[36px] font-semibold mb-6 text-text-color10 block">
                  A new class of lakehouse compute engines for
                </strong>
                <strong className="m-auto font-semibold text-primary-color block">
                  {`{ Breakthrough Price-Performance }`}
                </strong>
                on your Enterprise Analytics Platform
              </h1>
            </div>
            <h3 className="w-[95%] md:w-[80%] lg:w-full m-auto !text-text-color9 mt-6 ">
              For High Performance Workloads, GenAI Use Cases, Cost Effective
              Analytics, and Much More.
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="w-[95%] md:w-[80%] lg:w-full m-auto font-semibold">
                <strong className="text-[20px] md:text-[36px] font-semibold mb-6 text-text-color10 block">
                  Reimagining Architecture to
                </strong>
                <strong className="m-auto font-semibold text-primary-color block">
                  {`{ Disaggregated, Stateless, Kubernetes }`}
                </strong>
                from Monolithic, Stateful, VM-Centric
              </h1>
            </div>
            <h3 className="w-[95%] md:w-[80%] lg:w-full m-auto !text-text-color9 mt-6 ">
              For High Performance Workloads, GenAI Use Cases, Cost Effective
              Analytics, and Much More.
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="w-[95%] md:w-[80%] lg:w-full m-auto font-semibold">
                <strong className="text-[20px] md:text-[36px] font-semibold mb-6 text-text-color10 block">
                  Reimagining Distributed Processing to
                </strong>
                <strong className="m-auto font-semibold text-primary-color block">
                  {`{ Decentralized and Dynamic }`}
                </strong>
                from Centralized and Static
              </h1>
            </div>
            <h3 className="w-[95%] md:w-[80%] lg:w-full m-auto !text-text-color9 mt-6 ">
              For High Performance Workloads, GenAI Use Cases, Cost Effective
              Analytics, and Much More.
            </h3>
          </SwiperSlide>
        </Swiper>
        <div className="w-fit grid grid-cols-1 md:grid-cols-2 max-sm:space-y-6 md:space-x-6 m-auto ">
          <Buttons
            variant="primary"
            label="Start for Free"
            btnclass="md:text-[16px] xl:text-[18px] w-full md:!pl-2 md:!pr-0 "
            onClick={() => {
              window?.Calendly?.initPopupWidget({
                url: "https://calendly.com/e6data-product-demo/start-with-e6data",
              });
              return false;
            }}
          />
          <Buttons
            variant="primary-3"
            label="Get Live Demo"
            btnclass="md:text-[16px] xl:text-[18px] w-full md:!pl-2 md:!pr-0 bg-white"
            prefix={
              <SupportPerson className="mr-2 w-[20px] h-[20px] md:w-[35px] md:h-[35px]" />
            }
            onClick={() => {
              window?.Calendly?.initPopupWidget({
                url: "https://calendly.com/e6data-product-demo/product-demo",
              });
              return false;
            }}
          />
        </div>
        <div className="w-fit flex max-sm:flex-col  md:items-center justify-start text-text-color9 font-medium m-auto">
          <p>Want to talk or learn more about e6data</p>
          <div className="flex md:items-center  text-text-color2 cursor-pointer ">
            <div className="md:ml-2 landscape:pl-1 font-semibold flex items-center text-secondary-color ">
              <p className=" hover:scale-[1.06]">Request Benchmarks</p>
              <span className="text-inherit">
                &nbsp;{" "}
                <span className="text-text-color9 hover:scale-0">or</span>{" "}
                &nbsp;
              </span>
              <p className=" hover:scale-[1.06]"> TCO Calculator</p>
              <RightArrow width={15} height={15} className="ml-2 my-auto" />
            </div>
          </div>
        </div>
      </div>
    </HighlightGrid>
  );
}

export default HeroSection;
