import Buttons from "@/components/Buttons/Buttons";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Autoplay, EffectCards, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Sample1 from "@/assets/images/sample1.png";
import Sample2 from "@/assets/images/sample2.png";
import NextIcon from "@/assets/icons/next-icons.svg";
function CardFlowSection(props: any) {
  const cardSwiperRef = useRef<any>(null);
  const [cardSlideIndex, setCardSlideIndex] = useState<any>(0);
  const tabMenu = ["MarTech", "Fintech", "GameTech"];
  const goToCardSlide = (index: any) => {
    if (cardSwiperRef.current) {
      cardSwiperRef.current.slideTo(index);
    }
  };
  return (
    <div>
      <div className="w-full flex max-xl:flex-col xl:items-center">
        <div className="w-full xl:w-1/2">
          <h2 className="font-semibold  items-center">
            Slash Data
            <div className="text-primary-color inline-block">
              Platform costs.
            </div>
          </h2>
          <h6 className="font-normal">
            Turbocharge Dashboards, Reports, and Data Products.{" "}
          </h6>
        </div>
        <div className="w-full xl:w-1/2 h-fit text-text-color11 font-medium flex space-x-8 justify-end cursor-pointer mt-8 ">
          {tabMenu?.map((menuItem: any, menuIndex: any) => {
            return (
              <h6
                onClick={() => goToCardSlide(menuIndex)}
                className={`carasoul-card-menu  ${
                  cardSlideIndex === menuIndex
                    ? "text-text-color9 border-b-4 border-primary-color border-solid z-30 "
                    : ""
                }`}
              >
                {menuItem}
              </h6>
            );
          })}
        </div>
      </div>
      <Swiper
        className="carasoul-cards content-center w-full py-8 md:py-16 md:pr-[35%] "
        effect={"cards"}
        cardsEffect={{
          perSlideRotate: 0,
          perSlideOffset: 35,
          slideShadows: true,
        }}
        grabCursor={false}
        slideToClickedSlide={true}
        speed={700}
        spaceBetween={50}
        onSlideChange={({ activeIndex }: any) => {
          setCardSlideIndex(activeIndex);
        }}
        onSwiper={(swiper: any) => {
          cardSwiperRef.current = swiper;
        }}
        navigation={{
          enabled: false,
        }}
        modules={[Autoplay, Navigation, EffectCards]}
        breakpoints={{
          0: {
            navigation: {
              enabled: true,
            },
          },
        }}
      >
        <SwiperSlide className="max-sm:h-[40vh] max-md:landscape:h-[80vh] h-fit rounded-[15px] overflow-hidden">
          <div className="relative w-full h-full ">
            <Image
              alt="12"
              src={Sample1}
              className=" w-full h-full"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute top-0 left-0 w-full h-full opacity-85 bg-gradient-to-r from-[#732323]  to-[#2d2b2b96] " />
            <div className="absolute top-0 left-0 w-full h-full grid grid-rows-4 items-center px-9 md:px-12 !py-2 space-y-2">
              <Buttons
                variant="primary-3"
                label="MarTech"
                btnclass="w-fit md:text-[16px] xl:text-[18px] font-bold !text-white !border-white !px-8"
                prefix={
                  <div className="bg-white absolute top-0 left-0 w-full h-full opacity-20" />
                }
              />

              <h6 className="h-full row-span-2 text-white font-medium overflow-auto py-1 content-center">
                Turbocharge Dashboards, Reports, and Data Products. Fastest
                Turbocharge Dashboards, Reports, and Data Products. Fastest last
              </h6>

              <div className="h-full flex justify-between">
                <div className=" w-fit text-white font-bold flex items-center">
                  <h6 className="border-b-2 border-white mr-2">Read More</h6>
                  <NextIcon width={15} height={15} />
                </div>
                <div
                  className=" w-fit text-white font-bold flex items-center"
                  onClick={() => {
                    window?.Calendly?.initPopupWidget({
                      url: "https://calendly.com/e6data-product-demo/product-demo",
                    });
                    return false;
                  }}
                >
                  <h6 className="border-b-2 border-white mr-2">
                    Request For Demo
                  </h6>
                  <NextIcon width={15} height={15} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-sm:h-[40vh] max-md:landscape:h-[80vh] h-fit rounded-[15px] overflow-hidden">
          <div className="relative w-full h-full ">
            <Image
              alt="12"
              src={Sample1}
              className=" w-full h-full"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute top-0 left-0 w-full h-full opacity-85 bg-gradient-to-r from-[#732323]  to-[#2d2b2b96] " />
            <div className="absolute top-0 left-0 w-full h-full grid grid-rows-4 items-center px-9 md:px-12 !py-2 space-y-2">
              <Buttons
                variant="primary-3"
                label="MarTech"
                btnclass="w-fit md:text-[16px] xl:text-[18px] font-bold !text-white !border-white !px-8"
                prefix={
                  <div className="bg-white absolute top-0 left-0 w-full h-full opacity-20" />
                }
              />

              <h6 className="h-full row-span-2 text-white font-medium overflow-auto py-1 content-center">
                Turbocharge Dashboards, Reports, and Data Products. Fastest
                Turbocharge Dashboards, Reports, and Data Products. Fastest last
              </h6>

              <div className="h-full flex justify-between">
                <div className=" w-fit text-white font-bold flex items-center">
                  <h6 className="border-b-2 border-white mr-2">Read More</h6>
                  <NextIcon width={15} height={15} />
                </div>
                <div
                  className=" w-fit text-white font-bold flex items-center"
                  onClick={() => {
                    window?.Calendly?.initPopupWidget({
                      url: "https://calendly.com/e6data-product-demo/product-demo",
                    });
                    return false;
                  }}
                >
                  <h6 className="border-b-2 border-white mr-2">
                    Request For Demo
                  </h6>
                  <NextIcon width={15} height={15} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-sm:h-[40vh] max-md:landscape:h-[80vh] h-fit rounded-[15px] overflow-hidden">
          <div className="relative w-full h-full ">
            <Image
              alt="12"
              src={Sample1}
              className=" w-full h-full"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute top-0 left-0 w-full h-full opacity-85 bg-gradient-to-r from-[#732323]  to-[#2d2b2b96] " />
            <div className="absolute top-0 left-0 w-full h-full grid grid-rows-4 items-center px-9 md:px-12 !py-2 space-y-2">
              <Buttons
                variant="primary-3"
                label="MarTech"
                btnclass="w-fit md:text-[16px] xl:text-[18px] font-bold !text-white !border-white !px-8"
                prefix={
                  <div className="bg-white absolute top-0 left-0 w-full h-full opacity-20" />
                }
              />

              <h6 className="h-full row-span-2 text-white font-medium overflow-auto py-1 content-center">
                Turbocharge Dashboards, Reports, and Data Products. Fastest
                Turbocharge Dashboards, Reports, and Data Products. Fastest last
              </h6>

              <div className="h-full flex justify-between">
                <div className=" w-fit text-white font-bold flex items-center">
                  <h6 className="border-b-2 border-white mr-2">Read More</h6>
                  <NextIcon width={15} height={15} />
                </div>
                <div
                  className=" w-fit text-white font-bold flex items-center"
                  onClick={() => {
                    window?.Calendly?.initPopupWidget({
                      url: "https://calendly.com/e6data-product-demo/product-demo",
                    });
                    return false;
                  }}
                >
                  <h6 className="border-b-2 border-white mr-2">
                    Request For Demo
                  </h6>
                  <NextIcon width={15} height={15} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CardFlowSection;
