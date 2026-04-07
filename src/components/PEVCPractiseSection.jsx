"use client";

import { motion } from "framer-motion";
import Typography from "./ui-kit/typography";
import { Container } from "./ui-kit/spacing";
import Image from "next/image";
import AnimatedFadeUp from "./AnimatedFadeUp";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, 
    },
  },
};
const fadeUps = {
  hidden: () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
     
      return {
        opacity: 0,
        y: 60,
      };
    }

    return {
      opacity: 0,
      x: -40,
    };
  },

  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function PEVCPracticeSection({
  careersPage = false,
  startupPage = false,
  cardsData,
  topContent,
}) {
  return (
    <Container variant="mainBox" className="bg-[#0A193A] ">
      {careersPage && !startupPage ? (
        <div className="flex  gap-[126px] ">
          {/* Top Content */}
          <div className="flex flex-col gap-[16px] md:px-0 px-[24px]">
            <AnimatedFadeUp>
              <Typography variant="header-6" className="!text-white  ">
                {topContent?.title}
              </Typography>
            </AnimatedFadeUp>
            <AnimatedFadeUp delay={0.15}>
              <Typography variant="para-2" className="!text-white">
                {topContent?.subtitle}
              </Typography>
            </AnimatedFadeUp>
          </div>

          {/* Cards */}
          <div className="flex flex-col !w-[635px] shrink-0 ">
            {cardsData.map((item, i) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className=" px-[20px] py-[46px] borderCardPerk "
              >
                {/* Icon Placeholder */}
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="89"
                    height="89"
                    viewBox="0 0 89 89"
                    fill="none"
                  >
                    <path
                      d="M54.9979 73.0429H0L33.994 46.4568H88.9919L54.9979 73.0429ZM2.34274 72.235H54.7232L86.6492 47.2646H34.2687L2.34274 72.235Z"
                      fill="white"
                    />
                    <path
                      d="M54.9979 42.3932H0L33.994 15.8071H88.9919L54.9979 42.3932ZM2.34274 41.5854H54.7232L86.6492 16.615H34.2687L2.34274 41.5854Z"
                      fill="white"
                    />
                    <path
                      d="M54.9977 57.9442H54.2787V57.1363H54.715L55.4259 56.5789L55.9267 57.2171L54.9977 57.9442ZM52.663 57.9442H51.0473V57.1363H52.663V57.9442ZM49.4317 57.9442H47.816V57.1363H49.4317V57.9442ZM46.2003 57.9442H44.5846V57.1363H46.2003V57.9442ZM42.9689 57.9442H41.3532V57.1363H42.9689V57.9442ZM39.7376 57.9442H38.1219V57.1363H39.7376V57.9442ZM36.5062 57.9442H34.8905V57.1363H36.5062V57.9442ZM33.2748 57.9442H31.6591V57.1363H33.2748V57.9442ZM30.0434 57.9442H28.4278V57.1363H30.0434V57.9442ZM26.8121 57.9442H25.1964V57.1363H26.8121V57.9442ZM23.5807 57.9442H21.965V57.1363H23.5807V57.9442ZM20.3493 57.9442H18.7337V57.1363H20.3493V57.9442ZM17.118 57.9442H15.5023V57.1363H17.118V57.9442ZM13.8866 57.9442H12.2709V57.1363H13.8866V57.9442ZM10.6552 57.9442H9.03955V57.1363H10.6552V57.9442ZM7.42386 57.9442H5.80818V57.1363H7.42386V57.9442ZM4.19249 57.9442H2.57681V57.1363H4.19249V57.9442ZM1.57508 57.7341L1.07422 57.0959L2.35061 56.1023L2.85147 56.7405L1.58316 57.7341H1.57508ZM57.187 56.2235L56.6861 55.5853L57.9544 54.5916L58.4553 55.2298L57.1789 56.2235H57.187ZM4.11171 55.7387L3.61084 55.1006L4.88724 54.1069L5.3881 54.7451L4.11171 55.7387ZM59.7317 54.2281L59.2308 53.5899L60.5072 52.5962L61.008 53.2344L59.7317 54.2281ZM6.66449 53.7434L6.16363 53.1052L7.44002 52.1115L7.94088 52.7497L6.66449 53.7434ZM62.2844 52.2327L61.7836 51.5945L63.0519 50.6009L63.5527 51.2391L62.2764 52.2327H62.2844ZM9.20919 51.748L8.70833 51.1098L9.98472 50.1162L10.4856 50.7544L9.20919 51.748ZM64.8291 50.2373L64.3283 49.5991L65.6047 48.6055L66.1055 49.2437L64.8291 50.2373ZM11.7539 49.7526L11.253 49.1144L12.5294 48.1208L13.0303 48.759L11.7539 49.7526ZM67.3738 48.242L66.873 47.6038L68.1494 46.6101L68.6502 47.2483L67.3738 48.242ZM14.3067 47.7573L13.8058 47.1191L15.0822 46.1254L15.5831 46.7636L14.3067 47.7573ZM69.9266 46.2466L69.4258 45.6084L70.7022 44.6148L71.203 45.253L69.9266 46.2466ZM16.8514 45.7619L16.3505 45.1237L17.6269 44.1301L18.1278 44.7682L16.8514 45.7619ZM72.4713 44.2512L71.9705 43.613L73.2469 42.6194L73.7477 43.2576L72.4794 44.2512H72.4713ZM19.3961 43.7665L18.8952 43.1283L20.1716 42.1347L20.6725 42.7729L19.3961 43.7665ZM75.016 42.2559L74.5152 41.6177L75.7916 40.624L76.2924 41.2622L75.016 42.2559ZM21.9489 41.7712L21.448 41.133L22.7244 40.1393L23.2253 40.7775L21.9569 41.7712H21.9489ZM77.5607 40.2605L77.0599 39.6223L78.3363 38.6286L78.8371 39.2668L77.5607 40.2605ZM24.4855 39.7758L23.9846 39.1376L25.261 38.1439L25.7619 38.7821L24.4855 39.7758ZM80.1054 38.2651L79.6046 37.6269L80.881 36.6333L81.3818 37.2715L80.1054 38.2651ZM27.0302 37.7804L26.5293 37.1422L27.8057 36.1486L28.3066 36.7868L27.0302 37.7804ZM82.6501 36.2697L82.1493 35.6315L83.4257 34.6379L83.9265 35.2761L82.6501 36.2697ZM29.583 35.785L29.0821 35.1468L30.3585 34.1532L30.8594 34.7914L29.583 35.785ZM85.2029 34.2744L84.7021 33.6362L85.9785 32.6425L86.4793 33.2807L85.2029 34.2744ZM32.1277 33.7897L31.6268 33.1515L32.9032 32.1578L33.4041 32.796L32.1277 33.7897ZM87.7476 32.279L87.6184 32.1094H86.2127V31.3015H88.9998L87.7476 32.279ZM84.589 32.1094H82.9733V31.3015H84.589V32.1094ZM81.3576 32.1094H79.7419V31.3015H81.3576V32.1094ZM78.1262 32.1094H76.5105V31.3015H78.1262V32.1094ZM74.8949 32.1094H73.2792V31.3015H74.8949V32.1094ZM71.6635 32.1094H70.0478V31.3015H71.6635V32.1094ZM68.4321 32.1094H66.8164V31.3015H68.4321V32.1094ZM65.2008 32.1094H63.5851V31.3015H65.2008V32.1094ZM61.9694 32.1094H60.3537V31.3015H61.9694V32.1094ZM58.738 32.1094H57.1223V31.3015H58.738V32.1094ZM55.5066 32.1094H53.891V31.3015H55.5066V32.1094ZM52.2753 32.1094H50.6596V31.3015H52.2753V32.1094ZM49.0439 32.1094H47.4282V31.3015H49.0439V32.1094ZM45.8125 32.1094H44.1968V31.3015H45.8125V32.1094ZM42.5812 32.1094H40.9655V31.3015H42.5812V32.1094ZM39.3498 32.1094H37.7341V31.3015H39.3498V32.1094ZM36.1184 32.1094H34.5027V31.3015H36.1184V32.1094Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <Typography
                  variant="big-firm"
                  className="!text-white mt-[36px]"
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="para-2"
                  className="!text-[#F7F4EB] mt-[20px] "
                >
                  {item.desc}
                </Typography>
              </motion.div>
            ))}
          </div>
        </div>
      ) : startupPage && !careersPage ? (
        <div className="flex md:flex-row flex-col md:gap-[126px] gap-[84px] ">
          {/* Top Content */}
          <div className="flex flex-col gap-[16px] md:px-0 px-[24px] ">
            <AnimatedFadeUp>
              <Typography variant="header-6" className="!text-white  ">
                {topContent?.title}
              </Typography>
            </AnimatedFadeUp>
            <AnimatedFadeUp delay={0.15}>
              <Typography variant="para-2" className="!text-white">
                {topContent?.subtitle}
              </Typography>
            </AnimatedFadeUp>
          </div>

          {/* Cards */}
          <div className="flex flex-col md:!w-[635px] w-full shrink-0 ">
            {cardsData.map((item, i) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className=" md:px-[20px] px-[20px] md:py-[46px] py-[100px] borderCardPerk flex  md:flex-col flex-col md:gap-[36px] gap-[80px] "
              >
                {/* Icon Placeholder */}
                <div className="flex items-center h-[72px] w-[72px]">
                  <img
                    src={item.icon}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <Typography variant="big-firm" className="!text-white ">
                    {item.title}
                  </Typography>

                  <Typography
                    variant="para-2"
                    className="!text-[#F7F4EB] mt-[16px] "
                  >
                    {item.desc}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:gap-[96px] gap-[56px]">
          {/* Top Content */}
          <div className="flex md:flex-row flex-col justify-between gap-[36px] md:px-0 px-[24px] ">
            <AnimatedFadeUp >
              <Typography variant="header-6" className="!text-white  ">
                {topContent?.title}
              </Typography>
            </AnimatedFadeUp>
<AnimatedFadeUp delay={0.15}>
            <Typography variant="para-2" className="!text-white">
              {topContent?.subtitle}
            </Typography>
            </AnimatedFadeUp>
          </div>

          {/* Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-5%" }} // 5% viewport trigger
            className="grid md:grid-cols-3 grid-cols-1 gap-[15px]"
          >
            {cardsData.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUps}
                className="px-[16px] py-[26px]"
              >
                {/* Icon */}
                <div className="w-[89px] h-[89px] relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <Typography
                  variant="big-firm"
                  className="!text-white mt-[61px]"
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="para-2"
                  className="!text-[#F7F4EB] mt-[20px]"
                >
                  {item.desc}
                </Typography>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </Container>
  );
}
