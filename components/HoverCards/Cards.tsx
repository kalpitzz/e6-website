import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

export const Card = ({ className, children, type, data }: any) => {
  switch (type) {
    case "blog":
      return (
        <div
          className={cn(
            "grid rounded-xl h-full w-full group overflow-hidden bg-white border border-transparent group-hover:border-secondary-color relative !z-20 shadow-t1",
            className
          )}
        >
          <Image
            alt=""
            src={data?.image}
            className={`group-hover:scale-95 group-hover:rounded-xl transform object-cover transition duration-200 `}
          />
          <h6 className="p-4 font-semibold ">{data?.title}</h6>
          <p className="px-4 ">{data?.description}</p>
          <div className="w-full h-full  grid grid-cols-1 md:grid-cols-5   items-center p-4">
            <div className="col-span-3 h-fit flex flex-col text-text-color4 font-medium">
              <span className="ellipsis">Mr. Vishnu Vasanth Vishnu</span>
              <span className="ellipsis">26 May 2024</span>
            </div>
            <div className="col-span-2 h-fit justify-self-end ">
              <Link
                href={`/blogs/blog1`}
                // ${data?.id}
                className="px-4 py-2 bg-black text-white font-bold rounded-xl"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div
          className={cn(
            "rounded-2xl h-full w-full overflow-hidden bg-white border border-transparent group-hover:border-secondary-color relative z-20 shadow-t1",
            className
          )}
        >
          <div className="w-full h-full p-4">{children}</div>
        </div>
      );
  }
};
