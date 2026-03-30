"use client";

import Image from "next/image";
import Typography from "./ui-kit/typography";
import { Container } from "./ui-kit/spacing";
import Button from "./ui-kit/button";
import Link from "next/link";

export default function BlogGridSection({
  posts = [],
  buttonText ,
  buttonShow = false,
  variant = "scroll",
}) {
  return (
    <Container
      variant="primarySpacing"
      className={`md:!pr-[100px] ${
        variant === "scroll" ? "!pr-0" : "!pr-[24px]"
      }`}
    >
      <div
        className={`
          ${
            variant === "scroll"
              ? "flex md:grid md:grid-cols-3 overflow-x-auto overflow-y-hidden md:overflow-visible"
              : "flex flex-col md:grid md:grid-cols-3"
          }
           md:gap-0 gap-[16px] scrollbar-hide
        `}
      >
        {posts.map((item, index) => (
          <div
            key={index}
            className={`
              ${variant === "scroll" ? "min-w-[90%] md:min-w-0" : "w-full"}
              h-full
            `}
          >
            <Link href={`/insights/${item.slug}`}>
              <BlogCard buttonShow={buttonShow} data={item} />
            </Link>
          </div>
        ))}
      </div>

      {buttonShow && (
        <div className="flex justify-center md:pr-0 !pr-[24px]">
          <button className="mt-[36px] md:px-[36px] px-[24px] md:py-[12px] py-[18px] border border-[#31110F] md:w-fit w-full text-[#31110F]  text-[18px]">
            {buttonText}
          </button>
        </div>
      )}
    </Container>
  );
}

/* Card Component */
function BlogCard({ data, buttonShow }) {
  return (
    <div className=" px-[14px] py-[16px] cursor-pointer flex flex-col gap-[16px] border border-[#D7C7AB]  blogCard group ">
      {/* Image */}
      <div className=" h-[217px] !w-full  ">
        <Image
          src={data.image}
          alt="blog"
          width={400}
          height={200}
          className=" !w-full !h-full object-cover "
        />
      </div>

      {/* Content */}
      <div>
        {/* Category */}
        <div className=" px-[36px] py-[8px] border border-[var(--color-background-2)] !w-fit rounded-[500px] blogCardCat ">
          <Typography
            variant="para-3"
            className=" text-[var(--color-background-2)] blogCardCatText "
          >
            {data.category}
          </Typography>
        </div>

        {/* Title */}
        <Typography
          variant="header-2"
          className=" text-[var(--color-background-2)] group-hover:text-white hover:!underline mt-[16px] blogCardTitle "
        >
          {data.title}
        </Typography>

       
       
      
          <Typography
            variant="button"
            className="mt-[36px] !text-[#0A193A]/50 group-hover:!text-white/50"
          >
            {data.readTime} | {data.date}
          </Typography>
       
      </div>
    </div>
  );
}
