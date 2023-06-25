import React, { FC, ReactElement } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

const TopNavbar: FC = (): ReactElement => {
  return (
    <div className="h-17.5 border-b [#E9E9E9] absolute top-0 left-0 w-full flex justify-end items-center px-32 bg-white">
      <div className="px-10">
        <SearchIcon style={{ color: "#323332", width: "20px" }} />
      </div>
      <div className="px-10">
        <div className="relative">
          <NotificationsIcon style={{ color: "#323332", width: "20px" }} />
          <div className="w-5 h-5 bg-[#407eff] rounded-full absolute right-[-11px] top-[-5px] text-center text-white text-xs">
            4
          </div>
        </div>
      </div>
      <div className="pl-25">
        <div className="relative">
          <div className="w-10 h-10 bg-[#D8D8D8] rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-[#7BD500] rounded-full absolute right-4 bottom-0"></div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
