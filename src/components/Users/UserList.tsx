import React, { FC, ReactElement } from "react";
import { Button } from "@mui/material";
import UserListTable from "../../components/Tables/UserListTable";
import { useNavigate } from "react-router-dom";

const UserList: FC = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <section className="pl-32 pt-32">
      <div className="flex justify-between items-center">
        <p className="text-lg">All Users</p>
        <div className="px-10 w-[80%]">
          <div className="border-b [#E9E9E9] w-full" />
        </div>
        <div>
          <Button
            variant="contained"
            className="w-28.5 h-9 text-sm !bg-[#407eff] !normal-case"
            onClick={(): void => navigate("new")}
          >
            New user
          </Button>
        </div>
      </div>
      <div className="pt-32">
        <UserListTable />
      </div>
    </section>
  );
};

export default UserList;
