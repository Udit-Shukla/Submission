import Card from "./Card";
const HighlightsTab = () => {
  return (
    <div className="w-[30%] bg-white mt-6 mx-4">
      <p className=" font-second font-semibold leading-[18.75px] ">Todays Highlights (14)</p>
      <p className=" font-second font-normal text-xs leading-[14.06px]">19 Mar 2024</p>
      <div className="flex flex-row justify-between mx-auto px-4 mt-4 ">
        <Card color="text-[#148714]" value="100000 CAD " payments={2}  type="Income"/>
        <Card color="text-[#D04141]" value="50000 CAD " payments={5} type="Expenses" />
      </div>

      <div className="flex flex-row justify-between items-center mt-4">
        <p className="font-second font-semibold leading-[16.41px] text-sm py-2">Completed Activities (14)</p>
        <p className="text-[#1A3875] flex flex-row gap-2 hover:cursor-pointer underline font-second font-normal text-xs leading-[14.06px]">
          View All
        </p>
      </div>

      <div className="flex flex-col border font-second ">
        <p className="border border-b-1 p-3 text-[#888787] text-xs">
          <span className="text-[#1A3875] font-semibold">Gurpreet Singh</span>{" "}
          (Dispatch team) has created{" "}
          <span className="font-semibold text-black">
            {" "}
            Load No. I-I-AAA-1325
          </span>
        </p>
        <p className="border border-b-1 p-3 text-xs text-[#888787]">
          <span className="text-[#1A3875] font-semibold">Aman</span> (Driver)
          <span className="text-black font-semibold"> Picked Up</span> goods at{" "}
          <span className="text-black font-semibold">Location_Name</span>{" "}for 
          <span className="font-semibold text-black">
            {" "}
            Load No. I-I-AAA-1325
          </span>
        </p>

        <p className="border border-b-1 p-3 text-xs text-[#888787]">
          <span className="text-[#1A3875] font-semibold">Gurpreet Singh</span>{" "}
          (Dispatch team) has created{" "}
          <span className="font-semibold text-black">
            {" "}
            Load No. I-I-AAA-1325
          </span>
        </p>
        <p className="border border-b-1 p-3 text-xs text-[#888787]">
          <span className="text-black font-semibold">
            Load No. I-I-AAA-1325
          </span>{" "}
          will start added by{" "}
          <span className="font-semibold text-[#1A3875]">
            {" "}
            Gurpreet Singh
          </span>
        </p>
      </div>

      <div className="flex flex-row justify-between items-center my-4">
        <p className="font-second font-semibold leading-[16.41px] text-sm py-2">Scheduled Activities (14)</p>
        <p className="text-[#1A3875] flex flex-row gap-2 hover:cursor-pointer underline font-second font-normal text-xs leading-[14.06px]">
          View All
        </p>
      </div>
      <div className="flex flex-col border  ">
        <p className="border border-b-1 p-3 text-xs text-[#888787]">
          <span className="text-black font-semibold">Load No. I-I-AAA-1325</span>{" "}
          will be{" "}
          <span className="font-semibold text-black">
            {" "}
            delivered
          </span>{" "}
          by{" "}
          <span className="font-semibold text-[#1A3875]">
            {" "}
            Aman (Driver)
          </span>
        </p>
        <p className="border border-b-1 p-3 text-xs text-[#888787]">
          <span className="text-[#1A3875] font-semibold">Aman</span> (Driver) will {" "}
          <span className="text-black font-semibold"> Picked Up</span> goods at{" "}
          <span className="text-black font-semibold">Location_Name</span>{" "} for
          <span className="font-semibold text-black">
            {" "}
             Load No. I-I-AAA-1325
          </span>
        </p>

        <p className="border border-b-1 p-3 text-xs text-[#888787]">
          <span className="text-black font-semibold">
            Load No. I-I-AAA-1325
          </span>{" "}
          will start added by{" "}
          <span className="font-semibold text-[#1A3875]">
            {" "}
            Gurpreet Singh
          </span>
        </p>
        <p className="border border-b-1 p-3 text-xs text-[#888787]">
          <span className="text-black font-semibold">
            Load No. I-I-AAA-1325
          </span>{" "}
          will start added by{" "}
          <span className="font-semibold text-[#1A3875]">
            {" "}
            Gurpreet Singh
          </span>
        </p>
      </div>
    </div>
  );
};

export default HighlightsTab;
