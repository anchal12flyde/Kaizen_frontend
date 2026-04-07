import Typography from "./typography";
import { motion } from "framer-motion";

export default function TransactionCard({
  labelText = "",
  mainText = "",
  roleText = "",
  sectorText = "",
  transactionValue = "",
}) {
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40, 
      scale: 0.97, 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 3.1, 
        ease: [0.16, 1, 0.3, 1], 
      },
    },
  };
  return (
    <motion.div
      className="px-[32px] pt-[28px] pb-[40px] border-[0.67px] border-[#E5E5E5] w-fit flex flex-col gap-[32px]  bg-white w-full "
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div>
        <div className="mb-[20px] p-[12px] bg-[#142244] !rounded-xl w-fit ">
          <Typography variant="buttonText" className="!text-white ">
            {labelText}
          </Typography>
        </div>
        <Typography variant="header-1">{mainText}</Typography>
      </div>
      <div>
        <div className="flex md:gap-6 md:flex-row flex-col gap-1">
          <Typography variant="para-2" className=" ">
            <span className="text-accent font-[700] ">Role :</span> {roleText}
          </Typography>
          <Typography variant="para-2" className=" ">
            <span className="text-accent font-[700] ">Sector :</span>{" "}
            {sectorText}
          </Typography>
          <Typography variant="para-2" className=" ">
            <span className="text-accent font-[700] ">Transaction Value :</span>{" "}
            {transactionValue}
          </Typography>
        </div>
      </div>
    </motion.div>
  );
}
