"use client";
import Image from "next/image";
import React from "react";
import LightLogo from "@/assets/icons/logo-light.png";
import Link from "next/link";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import Buttons from "./Buttons/Buttons";

function Footer() {
  const validationScheme = Yup.object({
    email: Yup.string().email("Enter Valid Email").required("Required").trim(),
  });
  const initValue = {
    email: "",
  };

  const handleSubmit = async (values: any) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <footer className="w-full h-full grid md:grid-cols-3 max-sm:mt-16 ">
      <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-start pl-2 xl:pl-12">
        <Image src={LightLogo} alt="" width={150} height={60} />
        <Formik
          initialValues={initValue}
          validationSchema={validationScheme}
          onSubmit={handleSubmit}
        >
          <Form className="w-full flex flex-col xl:flex-row xl:items-end xl:space-x-4 px-4 lg:px-6 xl:pl-4">
            <div className="flex flex-col">
              <label htmlFor="email">Stay up to date with all updates</label>
              <div className="relative w-full">
                <Field
                  id="email"
                  name="email"
                  placeholder="Email..."
                  className="rounded-xl border-2 px-3 py-2 mt-1 w-full"
                />
                <span className="absolute bottom-[-25px] left-0 font-semibold  !text-red-700">
                  <ErrorMessage name="email" />
                </span>
              </div>
            </div>
            <Buttons
              label="Subscribe"
              variant={"primary"}
              btnclass="!bg-black w-full max-xl:mt-8 xl:w-fit"
              type="submit"
            />
          </Form>
        </Formik>
      </div>
      <div className="col-span-3 md:col-span-2 flex flex-col justify-center items-center pt-12 pb-10 ">
        <div className="w-full flex justify-evenly items-start  py-6 ">
          <div className="flex flex-col gap-2 ">
            <p className="font-semibold">Product</p>
            <Link href="">Features</Link>
            <Link href="">Pricing</Link>
            <Link href="">Changelog</Link>
            <Link href="">Support</Link>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="font-semibold">Legal</p>
            <Link href="">Terms of Privacy</Link>
            <Link href="">Privacy Policy</Link>
            <Link href="">Security</Link>
          </div>
          <div className="flex flex-col gap-2  ">
            <p className="font-semibold">Company</p>
            <Link href="">Blog</Link>
            <Link href="">Contact</Link>
          </div>
        </div>
        <p className=" text-[#5F6980] ">All rights reserved.© 2024 e6data</p>
      </div>
    </footer>
  );
}

export default Footer;
