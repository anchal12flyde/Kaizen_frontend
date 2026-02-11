"use client";

import Image from "next/image";
import Typography from "./ui-kit/typography";
import { Container } from "./ui-kit/spacing";

export default function BlogGridSection({ posts = [] }) {
  return (
    <Container variant="sectionSp1">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {posts.map((item, index) => (
          <BlogCard key={index} data={item} />
        ))}
      </div>
    </Container>
  );
}

/* Card Component */
function BlogCard({ data }) {
  return (
    <div className=" px-[14px] py-[16px] cursor-pointer flex flex-col gap-[16px]  ">
      {/* Image */}
      <div className="  " >
        <Image
          src={data.image}
          alt="blog"
          width={400}
          height={250}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {/* Content */}
      <div>
        {/* Category */}
        <div className=" px-[36px] py-[8px] border border-[var(--color-accent)] !w-fit rounded-[500px] " >
          <Typography variant="para-3" className=" !text-[var(--color-accent)] " >{data.category}</Typography>
        </div>

        {/* Title */}
        <Typography
          variant="header-2"
          className="underline !text-[var(--color-accent)] group-hover:text-white mt-[16px] "
        >
          {data.title}
        </Typography>

        <Typography
          variant="button"
          className="!text-[var(--color-accent)] mt-[36px] "
        >
          {data.readTime} | {data.date}
        </Typography>
      </div>
    </div>
  );
}
