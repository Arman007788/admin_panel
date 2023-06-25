import React, { FC, ReactElement } from "react";
import { UserComponentProps } from "../../@types/user";
import AddUserForm from "../Form/AddUserForm";
import EditUserForm from "../../components/Form/EditUserForm";

const UserInformation: FC<UserComponentProps> = ({ id }): ReactElement => {
  return (
    <section className="pl-32 pt-32">
      <div className="flex justify-start items-center">
        <p className="text-lg">{id ? "Edit user" : "New user"}</p>
        <div className="px-10 w-[80%]">
          <div className="border-b [#E9E9E9] w-full" />
        </div>
      </div>
      <div className="pt-32">
        <div className="border h-auto w-2/3 px-32 py-32">
          <div className="w-2/3">
            {id ? <EditUserForm id={id} /> : <AddUserForm />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInformation;
