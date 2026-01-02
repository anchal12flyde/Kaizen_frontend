import Typography from "./typography";

export default function TransactionCard({
  labelText = "Capital Markets",
  mainText = "Advised a strategic acquirer on the acquisition of a controlling stake in a technology-enabled services company, including legal due diligence and negotiation of transaction documentation.",
  roleText = "Advisor to acquirer",
  sectorText = "Technology",
  transactionValue = "305cr INR",
}) {
  return (
    <div className="px-[32px] pt-[28px] pb-[40px] border-[0.67px] border-[#E5E5E5] w-fit flex flex-col gap-[32px]  bg-white w-full ">
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
    </div>
  );
}
