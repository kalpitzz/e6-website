"use client";
import React, { useEffect, useState } from "react";
import sample1 from "@/assets/blog/sample-blog-1.jpg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RightSolidIcon from "@/assets/icons/right-solid.svg";
import GradientBackground from "@/assets/icons/gradient-back.svg";
import Buttons from "@/components/Buttons/Buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import BlogCard from "@/components/blog/BlogCard";

const blogs = [
  {
    id: "blog1",
    title: "write caching to turbocharge performance",
    subTitle: "How and why we built e6data!",
    author: "Vishnu Vasanth",
    date: "06 May 2024",
    titleImage: sample1,
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi pellentesque sed aliquam lacus sed pretium. Fringilla nullam id ultrices purus gravida tincidunt in proin. Consectetur ac volutpat egestas lectus. Molestie eleifend a fringilla volutpat aliquam dolor id. Nisl turpis integer faucibus enim in platea in viverra. Erat quis mauris integer bibendum eget quam. Non augue nibh ut tortor est lacinia sed neque. Malesuada ut ut duis sit. Mattis massa sit sed maecenas hac etiam ut vitae. Auctor nec mattis vitae ultricies scelerisque. Quis sed pharetra nunc viverra convallis ultrices ac.",
    sections: [
      {
        id: Math.random(),
        title: "section-1-title",
        subTitle: "How and why we built e6data!",
        description:
          "section description Lorem ipsum dolor sit amet consectetur. Morbi pellentesque sed aliquam lacus sed pretium. Fringilla nullam id ultrices purus gravida tincidunt in proin. Consectetur ac volutpat egestas lectus. Molestie eleifend a fringilla volutpat aliquam dolor id. Nisl turpis integer faucibus enim in platea in viverra. Erat quis mauris integer bibendum eget quam. Non augue nibh ut tortor est lacinia sed neque. Malesuada ut ut duis sit. Mattis massa sit sed maecenas hac etiam ut vitae. Auctor nec mattis vitae ultricies scelerisque. Quis sed pharetra nunc viverra convallis ultrices ac.",
        sectionImage: sample1,
        content:
          "section content, Lorem ipsum dolor sit amet consectetur. Morbi pellentesque sed section description Lorem ipsum dolor sit amet consectetur. Morbi pellentesque sed aliquam lacus sed pretium. Fringilla nullam id ultrices purus gravida tincidunt in proin. Consectetur ac volutpat egestas lectus. Molestie eleifend a fringilla volutpat aliquam dolor id. Nisl turpis integer faucibus enim in platea in viverra. Erat quis mauris integer bibendum eget quam. Non augue nibh ut tortor est lacinia sed neque. Malesuada ut ut duis sit. Mattis massa sit sed maecenas hac etiam ut vitae. Auctor nec mattis vitae ultricies scelerisque. Quis sed pharetra nunc viverra convallis ultrices ac.  ",

        cta: [
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Home",
            link: "/",
          },
        ],
        subSections: [
          {
            id: Math.random(),
            title: "sub-section-1 title",
            subTitle: "How and why we built e6data!",
            description:
              "sub-section-1 description Lorem ipsum dolor sit amet consectetur. Morbi pellentesque sed aliquam lacus sed pretium. Fringilla nullam id ultrices purus gravida tincidunt in proin. Consectetur ac volutpat egestas lectus. Molestie eleifend a fringilla volutpat aliquam dolor id. Nisl turpis integer faucibus enim in platea in viverra. Erat quis mauris integer bibendum eget quam. Non augue nibh ut tortor est lacinia sed neque. Malesuada ut ut duis sit. Mattis massa sit sed maecenas hac etiam ut vitae. Auctor nec mattis vitae ultricies scelerisque. Quis sed pharetra nunc viverra convallis ultrices ac.",
            subSectionImage: sample1,
            content:
              "sub-section-1 content, Lorem ipsum dolor sit amet consectetur. Morbi pellentesque sed section description Lorem ipsum dolor sit amet consectetur. Morbi pellentesque sed aliquam lacus sed pretium. Fringilla nullam id ultrices purus gravida tincidunt in proin. Consectetur ac volutpat egestas lectus. Molestie eleifend a fringilla volutpat aliquam dolor id. Nisl turpis integer faucibus enim in platea in viverra. Erat quis mauris integer bibendum eget quam. Non augue nibh ut tortor est lacinia sed neque. Malesuada ut ut duis sit. Mattis massa sit sed maecenas hac etiam ut vitae. Auctor nec mattis vitae ultricies scelerisque. Quis sed pharetra nunc viverra convallis ultrices ac.  ",

            cta: [
              {
                label: "Home",
                link: "/",
              },
              {
                label: "Home",
                link: "/",
              },
              {
                label: "Home",
                link: "/",
              },
              {
                label: "Home",
                link: "/",
              },
            ],
          },
          {
            id: Math.random(),
            title: "sub-section-1 title",
            subTitle: "How and why we built e6data!",
            description:
              "sub-section-1 description Lorem ipsum dolor sit amet consectetur. Morbi pellentesque sed aliquam lacus sed pretium. Fringilla nullam id ultrices purus gravida tincidunt in proin. Consectetur ac volutpat egestas lectus. Molestie eleifend a fringilla volutpat aliquam dolor id. Nisl turpis integer faucibus enim in platea in viverra. Erat quis mauris integer bibendum eget quam. Non augue nibh ut tortor est lacinia sed neque. Malesuada ut ut duis sit. Mattis massa sit sed maecenas hac etiam ut vitae. Auctor nec mattis vitae ultricies scelerisque. Quis sed pharetra nunc viverra convallis ultrices ac.",
            subSectionImage: sample1,
            content:
              "sub-section-1 content, Lorem ipsum dolor sit amet consectetur. Morbi pellentesque sed section description Lorem ipsum dolor sit amet consectetur. Morbi pellentesque sed aliquam lacus sed pretium. Fringilla nullam id ultrices purus gravida tincidunt in proin. Consectetur ac volutpat egestas lectus. Molestie eleifend a fringilla volutpat aliquam dolor id. Nisl turpis integer faucibus enim in platea in viverra. Erat quis mauris integer bibendum eget quam. Non augue nibh ut tortor est lacinia sed neque. Malesuada ut ut duis sit. Mattis massa sit sed maecenas hac etiam ut vitae. Auctor nec mattis vitae ultricies scelerisque. Quis sed pharetra nunc viverra convallis ultrices ac.  ",

            cta: [
              {
                label: "Home",
                link: "/",
              },
              {
                label: "Home",
                link: "/",
              },
              {
                label: "Home",
                link: "/",
              },
              {
                label: "Home",
                link: "/",
              },
            ],
          },
        ],
      },
      {
        id: Math.random(),
        title: "section-2-title",
        subTitle: "How and why we built e6data!",
        description:
          "section 2 description, Lorem ipsum dolor sit amet consectetur. Morbi pellentesque sed aliquam lacus sed pretium. Fringilla nullam id ultrices purus gravida tincidunt in proin. Consectetur ac volutpat egestas lectus. Molestie eleifend a fringilla volutpat aliquam dolor id. Nisl turpis integer faucibus enim in platea in viverra. Erat quis mauris integer bibendum eget quam. Non augue nibh ut tortor est lacinia sed neque. Malesuada ut ut duis sit. Mattis massa sit sed maecenas hac etiam ut vitae. Auctor nec mattis vitae ultricies scelerisque. Quis sed pharetra nunc viverra convallis ultrices ac.",
        sectionImage: sample1,
        content:
          "section 2 content, dolor sit amet consectetur. Morbi pellentesque sed aliquam lacus sed pretium ",
        cta: [
          {
            label: "Contact us",
            link: "/",
          },
        ],
      },
    ],
  },
];
function BlogDetails({ params }: any) {
  const [activeMenu, setActiveMenu] = useState<any>(0);
  const [blog, setBlog] = useState<any>({});

  useEffect(() => {
    const foundBlog = blogs?.find((item) => params?.id === item?.id);
    setBlog(foundBlog);
  }, []);

  return (
    <>
      <section className="min-h-screen w-[95%]  m-auto  ">
        <h1 className="w-full lg:w-2/3 m-auto xl:text-[70px] font-semibold text-center lg:tracking-[-3.5px] xl:leading-[85px] mt-12 md:mt-16 ">
          {blog?.title}
        </h1>
        <h3 className="w-full lg:w-2/3 m-auto text-[#5F5F5F] font-medium text-center my-3 lg:my-10 ">
          {blog?.subTitle}
        </h3>
        <div className="w-full lg:w-2/3 m-auto text-center my-3 md:my-10 ">
          <p className="text-[#5F5F5F] inline-block font-medium text-center m-auto ">
            By&nbsp;
            <strong className="font-semibold text-primary-color">
              {blog?.author}
            </strong>
            &nbsp;on {blog?.date}
          </p>
        </div>
        <div className="w-full m-auto rounded-lg overflow-hidden mt-12 md:mt-0">
          <Image alt="" src={blog?.titleImage} />
        </div>
        <div className="grid grid-cols-12 md:gap-2 mt-10">
          <div className="col-span-12 md:col-span-3 content-center max-sm:px-4 overflow-hidden rounded-xl">
            <div className="w-full h-full m-auto bg-gradient-to-r from-[#FFFFFF] to-[#F7F8FF] py-6 px-1">
              <h5 className="font-semibold mb-4">In this Post</h5>
              {blog?.sections?.map((section: any) => {
                return (
                  <div>
                    <span
                      onClick={() =>
                        setActiveMenu(section?.id || section?.title)
                      }
                      className={`flex items-center py-2 font-semibold ${
                        activeMenu === section?.id ||
                        activeMenu === section?.title
                          ? "text-primary-color"
                          : ""
                      }`}
                    >
                      <div className="w-7 h-7">
                        {section?.subSections?.length && (
                          <RightSolidIcon
                            className={`${
                              activeMenu === section?.id ||
                              activeMenu === section?.title
                                ? "rotate-90"
                                : "rotate-0"
                            }`}
                          />
                        )}
                      </div>
                      {section?.subSections?.length ? (
                        <span>{section?.title}</span>
                      ) : (
                        <Link href={`#${section?.title}`}>
                          <span>{section?.title}</span>
                        </Link>
                      )}
                    </span>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{
                        height:
                          activeMenu === section?.id ||
                          activeMenu === section?.title
                            ? "auto"
                            : 0,
                      }}
                      className="overflow-hidden ml-10"
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      {section?.subSections?.map(
                        (subSection: any, index: any) => {
                          return (
                            <Link
                              href={`#${subSection?.title}`}
                              className="mb-6"
                            >
                              <span className="block font-medium py-18  my-2 text-ellipsis">
                                {subSection?.title}
                              </span>
                            </Link>
                          );
                        }
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 font-normal py-6 px-4 space-y-8">
            <p className="lg:leading-[25px] xl:leading-[35px] ">
              {blog?.description}
            </p>
            <div className="space-y-8">
              {blog?.sections?.map((section: any) => {
                return (
                  <div className="w-full space-y-8 ">
                    <div className="space-y-1">
                      <h3
                        id={section?.title}
                        className=" text-[#2C2C2C] font-bold"
                      >
                        {section?.title}
                      </h3>
                      <h6 className=" text-[#5F5F5F] font-medium">
                        {section?.subTitle}
                      </h6>
                    </div>
                    <p className="lg:leading-[25px] xl:leading-[35px]">
                      {section?.description}
                    </p>
                    {section?.sectionImage && (
                      <Image
                        alt="trying this as small"
                        src={section?.sectionImage}
                        className="my-6 rounded-lg"
                      />
                    )}
                    <p className="lg:leading-[25px] xl:leading-[35px]">
                      {section?.content}
                    </p>
                    <div className="w-full flex flex-wrap justify-center gap-4 py-6">
                      {section?.cta?.map((ctaItem: any) => {
                        return (
                          <Link
                            href={ctaItem?.link}
                            className={`primary-btn-1 w-fit h-fit`}
                          >
                            <p> {ctaItem?.label}</p>
                          </Link>
                        );
                      })}
                    </div>

                    {section?.subSections?.map((subSection: any) => {
                      return (
                        <div
                          id={subSection?.title}
                          className="w-full space-y-8 "
                        >
                          <div className="space-y-1">
                            <h5 className="font-semibold">
                              {subSection?.title}
                            </h5>
                            <h6 className="font-medium text-[#5F5F5F]">
                              {subSection?.subTitle}
                            </h6>
                          </div>
                          <p className="lg:leading-[25px] xl:leading-[35px]">
                            {subSection?.description}
                          </p>
                          {subSection?.subSectionImage && (
                            <Image
                              alt=""
                              src={subSection?.subSectionImage}
                              className="my-6 rounded-lg"
                            />
                          )}
                          <p className="lg:leading-[25px] xl:leading-[35px]">
                            {subSection?.content}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full relative py-12">
        <div className="absolute top-0 left-0 w-full h-2/3 bg-[#F7F8FF]" />
        <h2 className="relative font-medium text-center px-12 mb-4">
          See other products overview
        </h2>
        <p className="relative text-center px-12 mb-12">
          Turbocharge Dashboards, Reports, and Data Products. Fastest
          Turbocharge Dashboards, Reports, and Data Products. Fastest
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className=" p-12"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1920: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <BlogCard
              data={{
                title: "An Under the Hood View of e6data",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply ",
                link: "/blogs/blob1",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard
              data={{
                title: "An Under the Hood View of e6data",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply ",
                link: "/blogs/blob1",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard
              data={{
                title: "An Under the Hood View of e6data",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply ",
                link: "/blogs/blob1",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard
              data={{
                title: "An Under the Hood View of e6data",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply ",
                link: "/blogs/blob1",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard
              data={{
                title: "An Under the Hood View of e6data",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply ",
                link: "/blogs/blob1",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard
              data={{
                title: "An Under the Hood View of e6data",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply ",
                link: "/blogs/blob1",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="relative w-[95%] xl:w-[80%] m-auto my-8 px-4 py-8 md:px-20 md:py-16 space-y-6 text-center content-center rounded-2xl bg-gradient-to-b  to-[#3f00a5]  from-[#040744] overflow-hidden">
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
      </section>
    </>
  );
}

export default BlogDetails;
