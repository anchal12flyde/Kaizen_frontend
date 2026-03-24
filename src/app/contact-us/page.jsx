import Button from "@/components/ui-kit/button";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";

export default function Contact() {
  

  return (
    <div>
      <Header />
      <div variant="sectionSp1" className="relative overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://ik.imagekit.io/75zj3bigp/704f19265420153f1b75a259bc7d4eee30ad5a7b.jpg"
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
                  Ready To Discuss Your Project With Us?
                </Typography>

                <div className="grid grid-cols-2 gap-y-[36px]  md:gap-x-[0] gap-x-[12px]">
                  {/* First Name */}
                  <div className="">
                    <div className="inputBorderContact flex flex-col">
                      <input
                        type="text"
                        className="bg-transparent outline-none pb-[26px] "
                        placeholder="First Name"
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="">
                    <div className="inputBorderContact flex flex-col">
                      <input
                        type="text"
                        className="bg-transparent outline-none pb-[26px] "
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="">
                    <div className="inputBorderContact flex flex-col">
                      <input
                        type="email"
                        className="bg-transparent outline-none pb-[26px] "
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="">
                    <div className="inputBorderContact flex flex-col">
                      <input
                        type="tel"
                        className="bg-transparent outline-none pb-[26px] "
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="">
                    <div className="inputBorderContact flex flex-col">
                      <input
                        type="text"
                        className="bg-transparent outline-none pb-[26px]  "
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div className="">
                    <div className="inputBorderContact flex flex-col">
                      <input
                        type="text"
                        className="bg-transparent outline-none pb-[26px] "
                        placeholder="Country"
                      />
                    </div>
                  </div>
                </div>

                <textarea
                  placeholder="Description"
                  className="inputBorderContact outline-none  w-full mt-[32px]"
                  rows={3}
                />

                <button className="mt-[40px] md:px-[32px] px-[24px] md:py-[16px] py-[16px] border border-[#231F20] md:w-fit w-full  hover:bg-black hover:text-white transition">
                  View Representative Transactions →
                </button>
              </div>

              {/* Right Location Section */}
              <div className=" bg-[var(--color-accent)] md:w-[390px] w-full  text-white relative flex flex-col justify-between">
                <div className="md:p-[26px] p-[12px]">
                  <Typography variant="header-5" className=" !text-white">
                    Where To Find Us
                  </Typography>

                  {/* Gurgaon */}
                  <div className="flex flex-col gap-[8px]">
                    <div className=" flex items-center gap-[12px]  mt-[28px] ">
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
                      <Typography variant="header-2" className=" !text-white  ">
                        Gurgaon
                      </Typography>
                    </div>

                    <Typography variant="para-2" className="!text-white  ">
                      1st Floor, DLF Centre Court, Golf Course Road, DLF Phase
                      5, Sector-42, Gurugram, Haryana – 122002
                    </Typography>
                  </div>

                  <div className=" flex flex-col gap-[8px] ">
                    <div className=" flex items-center gap-[12px]  mt-[28px] ">
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
                      <Typography variant="header-2" className=" !text-white  ">
                        Bengaluru
                      </Typography>
                    </div>

                    <Typography variant="para-2" className="!text-white  ">
                      KustomWork, 1st Floor, No.129, 5th Main Rd, 3rd Phase,
                      J.P. Nagar, Bengaluru, Karnataka – 560078
                    </Typography>
                  </div>
                </div>
                <Image
                  src="https://ik.imagekit.io/flyde/map.png"
                  width={200}
                  height={200}
                  className=" relative w-full h-auto  "
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-[var(--color-accent)]">
        <Container
          variant="sectionSp1"
          className=" border-b md:border-b-0 md:border-r border-white flex items-center justify-center gap-[16px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_119_49793)">
              <path
                d="M18.3952 13.1277C17.1707 13.1277 15.9684 12.9362 14.8291 12.5597C14.2708 12.3693 13.5845 12.544 13.2438 12.8939L10.995 14.5915C8.38703 13.1994 6.78057 11.5934 5.40745 9.00505L7.0551 6.81484C7.48318 6.38734 7.63672 5.76286 7.45276 5.17693C7.07464 4.03161 6.88255 2.8299 6.88255 1.6049C6.8826 0.719948 6.16266 0 5.27776 0H1.60484C0.719948 0 0 0.719948 0 1.60484C0 11.7481 8.25198 20 18.3952 20C19.2801 20 20.0001 19.2801 20.0001 18.3952V14.7325C20 13.8477 19.2801 13.1277 18.3952 13.1277Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_119_49793">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Typography variant="header-2" className="!text-white">
            +91-124-4389533
          </Typography>
        </Container>

        <Container
          variant="sectionSp1"
          className=" flex items-center justify-center gap-[16px]  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_119_49800)">
              <path
                d="M11.6714 12.2536C11.1739 12.5853 10.5959 12.7606 10 12.7606C9.40414 12.7606 8.82617 12.5853 8.32859 12.2536L0.133164 6.78977C0.087922 6.75952 0.0435173 6.72803 0 6.69535L0 15.6484C0 16.6748 0.833008 17.4895 1.84113 17.4895H18.1588C19.1853 17.4895 20 16.6565 20 15.6484V6.69531C19.9564 6.72808 19.9119 6.75963 19.8665 6.78992L11.6714 12.2536Z"
                fill="white"
              />
              <path
                d="M0.783204 5.81487L8.97863 11.2787C9.28887 11.4855 9.64441 11.5889 9.99996 11.5889C10.3555 11.5889 10.7111 11.4855 11.0214 11.2787L19.2168 5.81487C19.7072 5.48812 20 4.94124 20 4.35101C20 3.33612 19.1743 2.5105 18.1595 2.5105H1.84051C0.825665 2.51054 9.68791e-07 3.33616 9.68791e-07 4.35198C-0.000303273 4.64152 0.0710559 4.92662 0.207714 5.18188C0.344372 5.43713 0.54208 5.6546 0.783204 5.81487Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_119_49800">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Typography variant="header-2" className="!text-white">
            contact@kaizenlaw.in
          </Typography>
        </Container>
      </div>

      <Container
        variant="sectionSp1"
        className="  bg-[var(--color-background-2)] flex md:flex-row flex-col  gap-[46px] md:justify-between "
      >
        <Typography variant="header-5" className="!text-white">
          Ready to discuss your <br /> project with us?
        </Typography>

        <button className=" md:px-[32px] px-[24px] md:py-[26px] py-[18px] border-[1px] border-[#FFFFFF]  md:w-fit w-full text-white md:text-[24px] text-[18px]">
          Schedule A Consulation →
        </button>
      </Container>

      <Footer />
    </div>
  );
}
