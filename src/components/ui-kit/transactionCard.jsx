import Typography from "./typography";

export default function TransactionCard({
  labelText = "Capital Markets",
  mainText = "Advised a strategic acquirer on the acquisition of a controlling stake in a technology-enabled services company, including legal due diligence and negotiation of transaction documentation.",
  roleText = "Advisor to acquirer",
  sectorText = "Technology",
  transactionValue = "305cr INR",
}) {
  return (
    <div className="px-[32px] py-[16px] border border-gray-300 w-fit flex flex-col gap-[32px] max-w-[915px] ">
      <div className=" p-[12px] bg-[#142244] !rounded-xl w-fit ">
        <Typography variant="buttonText" className="!text-white ">
          {labelText}
        </Typography>
      </div>
      <Typography variant="header-1">{mainText}</Typography>
      <div>
        <div className="flex gap-6 " >
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
