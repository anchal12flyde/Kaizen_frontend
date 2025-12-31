import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";

export default function Services() {
  return (
    <div>
      <Header />
      <div className="relative h-screen bg-[url('https://ik.imagekit.io/flyde/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg')] bg-cover bg-center">
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative flex items-end h-full">
          <Container className="flex flex-col w-full" variant="heroSpacing">
            <div className="flex justify-between mt-[var(--sp-42)]">
              <Typography
                className="text-[var(--color-para-2)]!"
                variant="header-1"
              >
                At Jones & Brown Legal, we are committed to exceptional <br />
                service and successful outcomes with:
              </Typography>
            </div>
          </Container>
        </div>
      </div>

      <div>
        <div className="p-[48px_28px] md:p-[96px_64px]  lg:p-[96px_160px] flex flex-wrap items-center justify-between bg-bg-1 ">
          <div className="flex flex-col items-start gap-[56px] ">
            <Typography variant="display-2" className="text-accent">
              30+
            </Typography>
            <Typography variant="header-2" className="text-accent">
              years of experience
            </Typography>
          </div>
          <div className="flex flex-col items-start gap-[56px] ">
            <Typography variant="display-2" className="text-accent">
              98%
            </Typography>
            <Typography variant="header-2" className="text-accent">
              success rate in court
            </Typography>
          </div>
          <div className="flex flex-col items-start gap-[56px] ">
            <Typography variant="display-2" className="text-accent">
              120+
            </Typography>
            <Typography variant="header-2" className="text-accent">
              attorneys at hand
            </Typography>
          </div>
        </div>
      </div>

      <Container
        variant="sectionSp1"
        className="bg-bg-2 flex flex-col  gap-[170px] !w-full "
      >
        <Typography variant="para-1" className="!text-white">
          Navigating Complex Legal Landscapes? We <br /> Can Help.
        </Typography>
        <div className="md:grid md:grid-cols-2 md:justify-between col-gap-[24px] " >
          <div className=" flex items-start justify-between py-[20px] border-t-[.5px] border-[#fff] md:flex-col md:gap-[24px] md:w-fit  ">
            <Typography variant="header-3" className="!text-white">
              Business and Corporate Law
            </Typography>
            <div className="w-[420px] md:w-auto">
              <Typography variant="para-2" className="!text-white  ">
                Business formation (LLCs, corporations, partnerships) <br />{" "}
                Contract drafting and review <br /> Mergers and acquisitions{" "}
                <br /> Intellectual property protection <br /> Employment law
                and workplace policies <br />
                Corporate governance <br /> Shareholder and partnership disputes
              </Typography>
            </div>
          </div>
          <div className=" flex items-start justify-between py-[20px] border-t-[.5px] border-[#fff] md:flex-col md:gap-[24px] md:w-fit  ">
            <Typography variant="header-3" className="!text-white">
              Business and Corporate Law
            </Typography>
            <div className="w-[420px] md:w-auto">
              <Typography variant="para-2" className="!text-white  ">
                Business formation (LLCs, corporations, partnerships) <br />{" "}
                Contract drafting and review <br /> Mergers and acquisitions{" "}
                <br /> Intellectual property protection <br /> Employment law
                and workplace policies <br />
                Corporate governance <br /> Shareholder and partnership disputes
              </Typography>
            </div>
          </div>
          <div className=" flex items-start justify-between py-[20px] border-t-[.5px] border-[#fff] md:flex-col md:gap-[24px] md:w-fit  ">
            <Typography variant="header-3" className="!text-white">
              Business and Corporate Law
            </Typography>
            <div className="w-[420px] md:w-auto">
              <Typography variant="para-2" className="!text-white  ">
                Business formation (LLCs, corporations, partnerships) <br />{" "}
                Contract drafting and review <br /> Mergers and acquisitions{" "}
                <br /> Intellectual property protection <br /> Employment law
                and workplace policies <br />
                Corporate governance <br /> Shareholder and partnership disputes
              </Typography>
            </div>
          </div>
          <div className=" flex items-start justify-between py-[20px] border-t-[.5px] border-[#fff] md:flex-col md:gap-[24px] md:w-fit  ">
            <Typography variant="header-3" className="!text-white">
              Business and Corporate Law
            </Typography>
            <div className="w-[420px] md:w-auto">
              <Typography variant="para-2" className="!text-white  ">
                Business formation (LLCs, corporations, partnerships) <br />{" "}
                Contract drafting and review <br /> Mergers and acquisitions{" "}
                <br /> Intellectual property protection <br /> Employment law
                and workplace policies <br />
                Corporate governance <br /> Shareholder and partnership disputes
              </Typography>
            </div>
          </div>
          <div className=" flex items-start justify-between py-[20px] border-t-[.5px] border-[#fff] md:flex-col md:gap-[24px] md:w-fit  ">
            <Typography variant="header-3" className="!text-white">
              Business and Corporate Law
            </Typography>
            <div className="w-[420px] md:w-auto">
              <Typography variant="para-2" className="!text-white  ">
                Business formation (LLCs, corporations, partnerships) <br />{" "}
                Contract drafting and review <br /> Mergers and acquisitions{" "}
                <br /> Intellectual property protection <br /> Employment law
                and workplace policies <br />
                Corporate governance <br /> Shareholder and partnership disputes
              </Typography>
            </div>
          </div>
          <div className=" flex items-start justify-between py-[20px] border-t-[.5px] border-[#fff] md:flex-col md:gap-[24px] md:w-fit  ">
            <Typography variant="header-3" className="!text-white">
              Business and Corporate Law
            </Typography>
            <div className="w-[420px] md:w-auto">
              <Typography variant="para-2" className="!text-white  ">
                Business formation (LLCs, corporations, partnerships) <br />{" "}
                Contract drafting and review <br /> Mergers and acquisitions{" "}
                <br /> Intellectual property protection <br /> Employment law
                and workplace policies <br />
                Corporate governance <br /> Shareholder and partnership disputes
              </Typography>
            </div>
          </div>
        </div>
      </Container>

      <div className="!w-full h-[625px]  ">
        <Image
          src="https://ik.imagekit.io/flyde/croissant-m3kOyzCIQvE-unsplash.jpg"
          width={1200}
          height={800}
          className="!object-cover w-full h-full  "
        />
      </div>
      <Footer />
    </div>
  );
}
