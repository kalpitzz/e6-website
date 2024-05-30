import Image from "next/image";
import React from "react";
import Sample1 from "@/assets/images/sample2.png";
import Buttons from "../Buttons/Buttons";

function BlogCard({ data }: any) {
  return (
    <div className="w-full h-fit grid grid-rows-2 rounded-2xl overflow-hidden bg-white shadow-t3">
      <div className="p-6 pb-4 space-y-4 ">
        <h3 className="font-semibold max-h-[50%]">{data?.title}</h3>
        <p className="font-medium max-h-[50%] overflow-auto ">
          {data?.description}
        </p>
        <Buttons
          label="Read More"
          variant="primary"
          btnclass="!bg-secondary-color !py-2 "
        />
      </div>
      <div className="w-full h-full">
        <Image alt="" src={Sample1} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export default BlogCard;
