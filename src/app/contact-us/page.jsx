"use client";
import { useEffect } from "react";
import Button from "@/components/ui-kit/button";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import sitecontent from "@/data/sitecontent.json";
import { useSiteContent } from "@/context/SiteContentProvider";

export default function Contact() {
  const sitecontent = useSiteContent(); 
  const {contact} =sitecontent;
  const {contactSection, contactInfo,contactCTA} = contact;
  useEffect(() => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      input.addEventListener("animationstart", (e) => {
        if (e.animationName === "onAutoFillStart") {
          input.style.webkitTextFillColor = "#000";
        }
      });
    });
  }, []);
  
  return (
    <div>
      <Header />
      <div variant="sectionSp1" className="relative overflow-hidden">
        {/* Background Image */}
        <Image
          src={contactSection.bgImage}
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <Container
          variant="sectionSp1"
          className="relative z-10 flex items-center justify-center"
        >
          <div className="w-full  md:p-[15px] p-[12px] bg-[var(--color-background-1)] overflow-hidden">
            <div className="flex md:flex-row flex-col bg-[var(--color-background-1)] ">
              {/* Left Form Section */}
              <div className="md:p-[46px] pb-[36px] !bg-none  flex-1 ">
                <Typography variant="header-5" className=" mb-[76px] ">
                  {contactSection.form.title}
                </Typography>

                <div className="grid grid-cols-2 gap-y-[36px] gap-x-[12px]">
                  {contactSection.form.fields.map((field, i) => (
                    <div key={i}>
                      <div className="inputBorderContact flex flex-col">
                        <label className="text-[#231F20] opacity-[50%]">
                          {field.placeholder}
                        </label>
                        <div className="pt-[8px] !text-black">
                          <input
                            type={field.type}
                            autoComplete="on"
                            style={{ WebkitTextFillColor: "#000" }}
                            className="outline-none w-full bg-transparent text-black"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="inputBorderContact flex flex-col !mt-[36px]">
                  <label className="text-[#231F20] opacity-[50%]">
                    {contactSection.form.textarea.placeholder}
                  </label>
                  <Typography variant="para-2" className="pt-[8px]">
                    <textarea
                      type="text"
                      placeholder=""
                      className="bg-transparent outline-none w-full  text-black autofill:!text-black bg-transparent"
                    />
                  </Typography>
                </div>

                <button className="mt-[40px] md:px-[32px] px-[24px] md:py-[16px] py-[16px] border border-[#231F20] md:w-fit w-full  hover:bg-black hover:text-white transition">
                  {contactSection.form.button.label}
                </button>
              </div>

              {/* Right Location Section */}
              <div className=" bg-[var(--color-accent)] md:w-[390px] w-full  text-white relative flex flex-col justify-between">
                <div className="md:p-[26px] p-[12px]">
                  <Typography variant="header-5" className=" !text-white">
                    {contactSection.locations.title}
                  </Typography>

                  {/* Gurgaon */}
                  {contactSection.locations.items.map((loc, i) => (
                    <div key={i} className="flex flex-col gap-[8px]">
                      <div className="flex items-center gap-[12px] mt-[28px]">
                        {/* SVG same rahega */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M9.9991 0C6.00516 0 2.75586 3.2493 2.75586 7.2432C2.75586 12.1998 9.23785 19.4763 9.51383 19.7836C9.77305 20.0723 10.2256 20.0718 10.4844 19.7836C10.7604 19.4763 17.2423 12.1998 17.2423 7.2432C17.2423 3.2493 13.993 0 9.9991 0ZM9.9991 10.8875C7.98965 10.8875 6.35488 9.25266 6.35488 7.2432C6.35488 5.23375 7.98969 3.59898 9.9991 3.59898C12.0085 3.59898 13.6433 5.23379 13.6433 7.24324C13.6433 9.2527 12.0085 10.8875 9.9991 10.8875Z"
                            fill="white"
                          />
                        </svg>

                        <Typography variant="header-2" className="!text-white">
                          {loc.city}
                        </Typography>
                      </div>

                      <Typography variant="para-2" className="!text-white">
                        {loc.address}
                      </Typography>
                    </div>
                  ))}
                </div>
                <Image
                  src={contactSection.locations.mapImage}
                  width={200}
                  height={200}
                  className=" relative w-full h-auto  "
                  alt=""
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-[var(--color-accent)]">
        {contactInfo.items.map((item, i) => (
          <Container
            key={i}
            variant="sectionSp1"
            className={`flex items-center justify-center gap-[16px] ${
              i === 0 ? "border-b md:border-b-0 md:border-r border-white" : ""
            }`}
          >
            {/* ICON */}
            {item.type === "phone" && (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M18.3952 13.1277C17.1707 13.1277 15.9684 12.9362 14.8291 12.5597C14.2708 12.3693 13.5845 12.544 13.2438 12.8939L10.995 14.5915C8.38703 13.1994 6.78057 11.5934 5.40745 9.00505L7.0551 6.81484C7.48318 6.38734 7.63672 5.76286 7.45276 5.17693C7.07464 4.03161 6.88255 2.8299 6.88255 1.6049C6.8826 0.719948 6.16266 0 5.27776 0H1.60484C0.719948 0 0 0.719948 0 1.60484C0 11.7481 8.25198 20 18.3952 20C19.2801 20 20.0001 19.2801 20.0001 18.3952V14.7325C20 13.8477 19.2801 13.1277 18.3952 13.1277Z"
                  fill="white"
                />
              </svg>
            )}

            {item.type === "email" && (
              <img
                src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Group%20(21).png"
                className="w-[20px] h-[15px]"
              />
            )}

            {/* TEXT */}
            <Typography variant="header-2" className="!text-white">
              {item.value}
            </Typography>
          </Container>
        ))}
      </div>

      <Container
        variant="sectionSp1"
        className="  bg-[var(--color-background-2)] flex md:flex-row flex-col  gap-[46px] md:justify-between "
      >
        <Typography variant="header-5" className="!text-white">
          {contactCTA.title}
        </Typography>

        <button className=" md:px-[32px] px-[24px] md:py-[26px] py-[18px] border-[1px] border-[#FFFFFF]  md:w-fit w-full text-white md:text-[24px] text-[18px]">
          {contactCTA.button.label}
        </button>
      </Container>

      <Footer />
    </div>
  );
}
