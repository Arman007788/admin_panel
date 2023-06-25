import React, { FC, ReactElement } from "react";
import UserInformation from "../../components/UserInformation/UserInformation";
import { useParams } from "react-router-dom";

const User: FC = (): ReactElement => {
  const { id } = useParams();

  return (
    <>
      <UserInformation id={id} />
    </>
  );
};

export default User;
