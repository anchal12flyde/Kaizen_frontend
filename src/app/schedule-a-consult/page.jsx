import React from 'react'
import Image from 'next/image'
import Typography from '@/components/ui-kit/typography';

export default function page() {
  return (
    <section className="relative w-full h-[750px]">
      {/* Background image */}
      <Image
        src="https://ik.imagekit.io/a9uxeuyhx/6214ca8bc0a8c870a67c8469f213760e7acc34ff.jpg"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text content */}
      <div className="absolute top-[50px] left-[50px] right-[50px] bottom-[70px] flex flex-col justify-end gap-2">
        <Typography variant="hero-display" colorVariant='white'>Let us help you</Typography>
      </div>
    </section>
  );
}
