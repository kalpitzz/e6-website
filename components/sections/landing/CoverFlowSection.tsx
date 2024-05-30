import Buttons from "@/components/Buttons/Buttons";
import Stepper from "@/components/Stepper/BasicStepper";
import Image from "next/image";
import TickIcon from "@/assets/icons/tick.svg";
import VideoThumb1 from "@/assets/images/video-thumb.png";
import React, { useRef, useState } from "react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NextIcon from "@/assets/icons/next-icons.svg";
import { motion } from "framer-motion";
import Link from "next/link";
function CoverFlowSection({ variant = 1 }: any) {
  const coverflowSwiperRef = useRef<any>(null);
  const [coverflowSlideIndex, setCoverflowIndex] = useState<any>(0);
  const [coverflowTotalSlides, setCoverflowTotalSlides] = useState<any>(0);

  const progressData = [
    {
      title: "Finibus Bonorum ",
      description:
        "Turbocharge Dashboards, Reports, and Data Products. Fastest Turbocharge Dashboards, Reports, and Data Products. Fastest ",
      cta: {
        title: "Learn More",
        link: "/",
      },
    },
    {
      title: "Contrary to popular",
      description:
        "Turbocharge Dashboards, Reports, and Data Products. Fastest Turbocharge Dashboards, Reports, and Data Products. Fastest ",
      cta: {
        title: "Learn More",
        link: "/",
      },
    },
    {
      title: "Variation of passages",
      description:
        "Turbocharge Dashboards, Reports, and Data Products. Fastest Turbocharge Dashboards, Reports, and Data Products. Fastest ",
      cta: {
        title: "Learn More",
        link: "/",
      },
    },
    {
      title: "College in Virginia looked",
      description:
        "Turbocharge Dashboards, Reports, and Data Products. Fastest Turbocharge Dashboards, Reports, and Data Products. Fastest ",
      cta: {
        title: "Learn More",
        link: "/",
      },
    },
  ];

  const goToCoverSlide = (index: any) => {
    if (coverflowSwiperRef.current) {
      coverflowSwiperRef.current.slideTo(index);
    }
  };

  const selectVariant = () => {
    switch (variant) {
      case 1:
        return (
          <div className="relative text-white mt-8">
            <div className="absolute z-[-1] top-0 left-0 w-full h-3/5 bg-gradient-to-r from-[#3F00A5]  to-[#040744]" />
            <div className="px-12 w-full flex pt-6">
              <div className="w-2/3 pt-12">
                <h2>Easy, Quick, Automated Platform costs. </h2>
                <h5 className="w-2/3">
                  Turbocharge Dashboards, Reports, and Data Products. Fastest
                  time to value on high-Impact use cases
                </h5>
              </div>
              <div className="flex justify-end pr-3 items-center w-1/3">
                <Buttons
                  variant="primary"
                  label="Start for Free"
                  btnclass="md:text-[16px] xl:text-[18px] w-full font-semibold !bg-white !text-text-color9"
                  onClick={() => {
                    window?.Calendly?.initPopupWidget({
                      url: "https://calendly.com/e6data-product-demo/start-with-e6data",
                    });
                    return false;
                  }}
                />
              </div>
            </div>
            <div className="relative z-10 mt-6 pt-12 pb-24">
              <div className="z-20 absolute top-4 left-0 w-full h-fit px-12 ">
                <div className="w-[20%] max-w-[40%]">
                  <Stepper
                    variant={1}
                    current={coverflowSlideIndex}
                    total={coverflowTotalSlides}
                    onStepClick={(index: any) => goToCoverSlide(index)}
                    stepClass={""}
                    progressClass={""}
                    stepRender={(index: any) => (
                      <div
                        className={`${
                          coverflowSlideIndex < index
                            ? "bg-white"
                            : "bg-secondary-color"
                        } rounded-full `}
                      >
                        <TickIcon width={30} height={30} />
                      </div>
                    )}
                  />
                </div>
              </div>
              <Swiper
                className="coverflow-slide-v1 content-center w-full h-full  px-[18%] "
                effect={"coverflow"}
                centeredSlides={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1.2,
                  slideShadows: true,
                  scale: 0.92,
                }}
                grabCursor={false}
                slideToClickedSlide={true}
                speed={700}
                onSlideChange={({ activeIndex }) => {
                  setCoverflowIndex(activeIndex);
                }}
                onSwiper={(swiper) => {
                  coverflowSwiperRef.current = swiper;
                  setCoverflowTotalSlides(() => swiper?.slides?.length);
                }}
                navigation={{
                  enabled: false,
                }}
                modules={[Autoplay, Navigation, EffectCoverflow]}
                breakpoints={{
                  768: {
                    navigation: {
                      enabled: true,
                    },
                  },
                }}
              >
                <SwiperSlide>
                  <div className="relative !w-[795px] !h-[580px] px-12 shadow-t2 m-auto my-10 bg-white text-black rounded-[15px] overflow-hidden ">
                    {coverflowSlideIndex !== 0 && (
                      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-[0.4] " />
                    )}
                    <div className="h-[30%] max-h-[30%] flex pt-8 pb-1 ">
                      <div className="w-2/3 max-w-2/3 overflow-auto">
                        <h5 className="font-medium mb-4">Heading 1</h5>
                        <span>
                          Vorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis.
                        </span>
                      </div>
                      <div className="w-1/3 max-w-1/3 flex justify-end pr-4">
                        <Buttons
                          variant="primary"
                          label="Step 1"
                          btnclass=" w-full font-medium !bg-black !text-white !py-[0.35rem]"
                        />
                      </div>
                    </div>
                    <div className="h-[70%] max-h-[70%] overflow-hidden rounded-t-[1rem] bg-secondary-color">
                      <Image
                        alt=""
                        src={VideoThumb1}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative !w-[795px] !h-[580px] px-12 shadow-t2 m-auto my-10 bg-white text-black rounded-[15px] overflow-hidden ">
                    {coverflowSlideIndex !== 1 && (
                      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-[0.4] " />
                    )}
                    <div className="h-[30%] max-h-[30%] flex pt-8 pb-1 ">
                      <div className="w-2/3 max-w-2/3 overflow-auto">
                        <h5 className="font-medium mb-4">Heading 2</h5>
                        <span>
                          Vorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis.
                        </span>
                      </div>
                      <div className="w-1/3 max-w-1/3 flex justify-end pr-4">
                        <Buttons
                          variant="primary"
                          label="Step 2"
                          btnclass=" w-full font-medium !bg-black !text-white !py-[0.35rem]"
                        />
                      </div>
                    </div>
                    <div className="h-[70%] max-h-[70%] overflow-hidden rounded-t-[1rem] bg-secondary-color">
                      <Image
                        alt=""
                        src={VideoThumb1}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative !w-[795px] !h-[580px] px-12 shadow-t2 m-auto my-10 bg-white text-black rounded-[15px] overflow-hidden ">
                    {coverflowSlideIndex !== 2 && (
                      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-[0.4] " />
                    )}
                    <div className="h-[30%] max-h-[30%] flex pt-8 pb-1 ">
                      <div className="w-2/3 max-w-2/3 overflow-auto">
                        <h5 className="font-medium mb-4">Heading 3</h5>
                        <span>
                          Vorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis.
                        </span>
                      </div>
                      <div className="w-1/3 max-w-1/3 flex justify-end pr-4">
                        <Buttons
                          variant="primary"
                          label="Step 3"
                          btnclass=" w-full font-medium !bg-black !text-white !py-[0.35rem]"
                        />
                      </div>
                    </div>
                    <div className="h-[70%] max-h-[70%] overflow-hidden rounded-t-[1rem] bg-secondary-color">
                      <Image
                        alt=""
                        src={VideoThumb1}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="bg-[#F7F8FF] py-12 2xl:py-16 space-y-2 ">
            <div className="px-4 lg:px-12">
              <h2 className="max-sm:px-2 font-semibold ">
                Easy, Quick, Automated Platform costs.
              </h2>
              <h6 className="max-sm:px-2">
                Turbocharge Dashboards, Reports, and Data Products.
              </h6>
            </div>
            <div className=" w-full grid grid-cols-1 lg:grid-cols-2 px-2 xl:px-12 !my-16">
              <div className="w-full flex justify-start px-4 lg:px-0 ">
                <Stepper
                  variant={2}
                  current={coverflowSlideIndex}
                  total={coverflowTotalSlides}
                  onStepClick={(index: any) => goToCoverSlide(index)}
                  stepClass={""}
                  progressBgCls={"w-[5px] bg-[#DADCEE] "}
                  progressClass={`w-[6px] transition-height duration-2000  ${
                    coverflowSlideIndex == 0 ? `!h-[10%]` : ""
                  }`}
                  stepRender={(index: any) => null}
                />
                <div className="relative w-full space-y-8 pl-8">
                  {progressData?.map((steps: any, index: number) => {
                    return (
                      <div className="w-full max-w-screen md:max-w-[35rem] lg:max-w-[20rem] xl:max-w-[30rem] space-y-4 overflow-hidden">
                        <h5
                          className="cursor-pointer font-bold text-text-color9"
                          onClick={() => goToCoverSlide(index)}
                        >
                          {steps?.title}
                        </h5>
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{
                            height: index === coverflowSlideIndex ? "auto" : 0,
                          }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                          className={`flex flex-col space-y-4 overflow-hidden text-text-color9`}
                        >
                          <h6> {steps?.description}</h6>

                          <div className="flex items-center">
                            <Link href={steps?.cta?.link}>
                              <h6 className="font-semibold text-primary-color mr-1">
                                {steps?.cta?.title}
                              </h6>
                            </Link>
                            <NextIcon
                              fill={"var(--primary-color)"}
                              width={10}
                              height={10}
                            />
                          </div>
                          <div className="lg:hidden rounded-xl overflow-hidden bg-white">
                            <Image alt="" src={VideoThumb1} />
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full max-lg:!h-0 grid h-full max-lg:invisible ">
                <Swiper
                  className="coverflow-slide-v2 w-full h-full rounded-xl overflow-hidden bg-[#DADCEE] p-4 "
                  grabCursor={false}
                  spaceBetween={50}
                  slideToClickedSlide={true}
                  speed={700}
                  onSlideChange={({ activeIndex }) => {
                    setCoverflowIndex(activeIndex);
                  }}
                  onSwiper={(swiper) => {
                    coverflowSwiperRef.current = swiper;
                    setCoverflowTotalSlides(() => swiper?.slides?.length);
                  }}
                  modules={[Autoplay, EffectCoverflow]}
                >
                  <SwiperSlide className="w-full h-full content-center">
                    <div className="w-fit m-auto rounded-xl overflow-hidden bg-white">
                      <Image
                        alt=""
                        src={VideoThumb1}
                        // className="w-full h-full"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="w-full h-full content-center">
                    <div className="w-fit m-auto rounded-xl overflow-hidden bg-white">
                      <Image
                        alt=""
                        src={VideoThumb1}
                        // className="w-full h-full"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="w-full h-full content-center">
                    <div className="w-fit m-auto rounded-xl overflow-hidden bg-white">
                      <Image
                        alt=""
                        src={VideoThumb1}
                        // className="w-full h-full"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="w-full h-full content-center">
                    <div className="w-fit m-auto rounded-xl overflow-hidden bg-white">
                      <Image
                        alt=""
                        src={VideoThumb1}
                        // className="w-full h-full"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center px-6 xl:px-12">
              <div className=" flex items-center space-x-4">
                <Buttons
                  variant="primary"
                  label="Start for Free"
                  btnclass="md:text-[16px] xl:text-[18px] font-semibold "
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
                  btnclass="md:text-[16px] xl:text-[18px] font-semibold !border-none !text-text-color9"
                  suffix={
                    <NextIcon
                      fill="black"
                      width={15}
                      height={15}
                      className="ml-2"
                    />
                  }
                  onClick={() => {
                    window?.Calendly?.initPopupWidget({
                      url: "https://calendly.com/e6data-product-demo/product-demo",
                    });
                    return false;
                  }}
                />
              </div>
              <div className=" flex items-center justify-end space-x-4  max-md:hidden">
                <span className="font-semibold text-[#7F87BD] mr-4">
                  STEP {coverflowSlideIndex + 1}
                </span>
                <NextIcon
                  width={35}
                  height={35}
                  className="p-2 rotate-180 rounded-full bg-[#8787BF]"
                  onClick={() => {
                    if (coverflowSlideIndex > 0)
                      goToCoverSlide(coverflowSlideIndex - 1);
                  }}
                />
                <NextIcon
                  width={35}
                  height={35}
                  className="p-2 rounded-full bg-[#8787BF]"
                  onClick={() => {
                    if (coverflowSlideIndex <= coverflowTotalSlides)
                      goToCoverSlide(coverflowSlideIndex + 1);
                  }}
                />
              </div>
            </div>
          </div>
        );

      default:
        <></>;
    }
  };

  return selectVariant();
}

export default CoverFlowSection;
