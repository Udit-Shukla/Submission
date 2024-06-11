import { Divider } from "@mui/material";
import label from "../assets/icons/label.svg";
import shipping from "../assets/icons/shipping.svg";
import trailer from "../assets/icons/trailer.svg";
import user from "../assets/icons/user.svg";
const Actions = () => {
  return (
    <div className="flex flex-col gap-4 bg-[#F7FAFF] flex-wrap">
     
      <div className=" flex flex-col gap-3 rounded-lg border border-b-gray-100 bg-white  justify-around w-[90%] ml-6 py-3 hover:cursor-pointer shadow-lg md:flex-row ">
        <div className="flex flex-col justify-center items-center  gap-2  ">
          <img src={label} alt="label" className=" w-6" />
          <p>Create Indents</p>
        </div>
        <Divider orientation="vertical" variant="full" flexItem />
        <div className="flex flex-col justify-center items-center gap-2 ">
          <img src={shipping} alt="label" className=" w-6" />
          <p>Add Vehicle</p>
        </div>
        <Divider orientation="vertical" variant="full" flexItem />
        <div className="flex flex-col items-center justify-center gap-2 ">
          <img src={trailer} alt="label" className=" w-6" />
          <p>Add Trailer</p>
        </div>
        <Divider orientation="vertical" variant="full" flexItem />
        <div className="flex flex-col justify-center items-center gap-2  ">
          <img src={user} alt="label" className=" w-6" />
          <p>Add Driver</p>
        </div>
        <Divider orientation="vertical" variant="full" flexItem />
        <div className="flex flex-col items-center justify-center gap-2 ">
          <img src={shipping} alt="label" className=" w-6" />
          <p>Add Indents</p>
        </div>
      </div>
    </div>
  );
};

export default Actions;
