"use client";

import Image from "next/image";
import Typography from "./ui-kit/typography";
import { Container } from "./ui-kit/spacing";
import Button from "./ui-kit/button";

export default function BlogGridSection({ posts = [], buttonShow = false }) {
  return (
    <Container variant="sectionSp1" className="!py-[60px]">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {posts.map((item, index) => (
          <BlogCard buttonShow={buttonShow} key={index} data={item} />
        ))}
      </div>
      {buttonShow && (
        <div className=" flex justify-center " >
          <Button variant="primary" className="mt-[36px]">
            View More
          </Button>
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
