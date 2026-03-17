"use client";

import Image from "next/image";
import Typography from "./ui-kit/typography";
import { Container } from "./ui-kit/spacing";
import Button from "./ui-kit/button";

export default function BlogGridSection({ posts = [], buttonShow = false }) {
  return (
    <Container variant="primarySpacing" className="md:!pr-[100px] !pr-0">
      <div className="flex md:grid md:grid-cols-3 overflow-x-auto overflow-y-hidden md:overflow-visible gap-[16px] scrollbar-hide ">
        {posts.map((item, index) => (
          <div key={index} className="min-w-[90%] md:min-w-0 h-full">
            <BlogCard buttonShow={buttonShow} data={item} />
          </div>
        ))}
      </div>

      {buttonShow && (
        <div className="flex justify-center md:pr-0  !pr-[24px]">
          <button className="mt-[36px] md:px-[36px] px-[24px] md:py-[12px] py-[18px] border border-[#31110F] md:w-fit w-full text-[#31110F] md:text-[24px] text-[18px]">
            View More ↓
          </button>
        </div>
      )}
    </Container>
  );
}

/* Card Component */
function BlogCard({ data, buttonShow }) {
  return (
    <div className=" px-[14px] py-[16px] cursor-pointer flex flex-col gap-[16px] border border-[#D7C7AB]  blogCard  ">
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
        <div className=" px-[36px] py-[8px] border border-[var(--color-accent)] !w-fit rounded-[500px] blogCardCat ">
          <Typography
            variant="para-3"
            className=" text-[var(--color-accent)] blogCardCatText "
          >
            {data.category}
          </Typography>
        </div>

        {/* Title */}
        <Typography
          variant="header-2"
          className=" text-[var(--color-accent)] group-hover:text-white hover:!underline mt-[16px] blogCardTitle "
        >
          {data.title}
        </Typography>

        <Typography variant="button" className="mt-[36px] blogCardDate ">
          {data.readTime} | {data.date}
        </Typography>
      </div>
      
    </div>
  );
}
