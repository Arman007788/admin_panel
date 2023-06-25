import UserListTable from "~/components/Tables/UserListTable";
import { OrderBy } from "~/@types/common";

export interface UserProps {
  id: number;
  name: string;
  email: string;
  photo: string;
  location: string;
  registeredDate: string;
  lastActiveDate: string;
  disabled: boolean;
}
export interface UserComponentProps {
  id?: string;
};

export type UserFormProps = UserComponentProps;

export interface FormProps {
  email: string;
  name: string;
  location: string;
  photo: string;
}
export interface FormPropsForEdit extends FormProps {
  id: number;
}

export interface ChangeQueryProps {
  id: number;
  email: string;
  name: string;
  location: string;
}

export interface UserListTableProps {
  data: UserProps[];
}

export type UserDataSort = "" | "name" | "email" | "location" | "lastActiveDate" | "registeredDate";

export type UserTableSortProps = {
  _sort: UserDataSort;
  _order: OrderBy;
  _page: number;
  _limit: number;
}