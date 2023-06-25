import React, { FC, ReactElement, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import EmailIcon from "@mui/icons-material/Email";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { UserDataSort, UserTableSortProps } from "../../@types/user";
import { OrderBy } from "~/@types/common";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  changeUserStateThunk,
  deleteUserThunk,
  getAllUsersCountThunk,
  getUsersThunk,
} from "../../store/thunk/user";
import ArrowTop from "../../assets/ArrowTop.svg";
import ArrowUp from "../../assets/ArrowUp.svg";
import { Box, MenuItem, Pagination, Select } from "@mui/material";
import { convertDate } from "../../util/date";

const DEFAULT_ORDERBY = "desc";
const DEFAULT_SORTBY = "";
const DEFAULT_PAGE = 0;
const DEFAULT_LIMIT = 10;

const UserListTable: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { users, count } = useAppSelector((state) => state.userSlice);
  const [pageNumber, setPageNumber] = useState(1);
  const [perCount, setPerCount] = useState(10);
  const [allCount, setAllCount] = useState(count);
  const [sorting, setSorting] = useState<UserTableSortProps>({
    _sort: DEFAULT_SORTBY,
    _order: DEFAULT_ORDERBY,
    _page: DEFAULT_PAGE,
    _limit: DEFAULT_LIMIT,
  });

  const handleSort = (sortBy: UserDataSort): void => {
    let order: OrderBy = DEFAULT_ORDERBY;

    if (sorting._sort === sortBy) {
      if (sorting._order === DEFAULT_ORDERBY) {
        order = "asc";
      }
    }

    setSorting((prev) => {
      return {
        ...prev,
        _sort: sortBy,
        _order: order,
      };
    });
  };

  const handleDelete = (userId: number): void => {
    dispatch(deleteUserThunk(userId));
    setAllCount(allCount - 1);
  };

  const handleChangeState = (userId: number, state: boolean): void => {
    dispatch(changeUserStateThunk({ userId, state }));
  };

  const handleChangePage = (page: number): void => {
    setPageNumber(page);
    setSorting((prev) => {
      return {
        ...prev,
        _page: page,
      };
    });
  };

  const handleChangePerPage = (count: string): void => {
    setPerCount(Number(count));
    setSorting((prev) => {
      return {
        ...prev,
        _limit: Number(count),
      };
    });
  };

  useEffect(() => {
    dispatch(getUsersThunk(sorting));
  }, [sorting]);

  useEffect(() => {
    dispatch(getAllUsersCountThunk());
    setAllCount(count);
  }, [count]);

  const iconState = (sort: string): ReactElement => {
    if (sorting._sort === sort) {
      if (sorting._order !== DEFAULT_ORDERBY) {
        return (
          <>
            <img src={ArrowTop} alt="top" />
          </>
        );
      } else {
        return (
          <>
            <img src={ArrowUp} alt="up" />
          </>
        );
      }
    }

    return <></>;
  };

  return (
    <section>
      <Table width="100%" className="text-xs">
        <thead className="bg-[#F1F3F5]">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Photo</th>
            <th onClick={(): void => handleSort("name")}>
              <div className="flex items-center justify-center">
                <p>Name</p>
                <div className="px-10">{iconState("name")}</div>
              </div>
            </th>
            <th onClick={(): void => handleSort("location")}>
              <div className="flex items-center justify-center">
                <p>Location</p>
                <div className="px-10">{iconState("location")}</div>
              </div>
            </th>
            <th onClick={(): void => handleSort("registeredDate")}>
              <div className="flex items-center justify-center">
                <p>Registered Date</p>
                <div className="px-10">{iconState("registeredDate")}</div>
              </div>
            </th>
            <th onClick={(): void => handleSort("lastActiveDate")}>
              <div className="flex items-center justify-center">
                <p>Last active date</p>
                <div className="px-10">{iconState("lastActiveDate")}</div>
              </div>
            </th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map((user, index) => {
            return (
              <tr className="border-b h-15" key={`user_data_${index}`}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div className="inline-block m-auto">
                    <img src={user.photo} alt="" width="40px" height="40px" />
                  </div>
                </td>
                <td>
                  <Link to={`/users/${user.id}`} className="text-[#407eff]">
                    {user.name}
                  </Link>
                </td>
                <td>{user.location}</td>
                <td>
                  {user.registeredDate && convertDate(user.registeredDate)}
                </td>
                <td>
                  {user.lastActiveDate && convertDate(user.lastActiveDate)}
                </td>
                <td>
                  <Link
                    to="#"
                    onClick={(e): void => {
                      window.location.href = `mailto:${user.email}`;
                      e.preventDefault();
                    }}
                  >
                    <EmailIcon className="cursor-pointer" />
                  </Link>
                </td>
                <td>
                  <Switch
                    checked={user.disabled}
                    onChange={(event): void =>
                      handleChangeState(user.id, event.target.checked)
                    }
                    className="w-1"
                    size="small"
                  />
                  <DeleteIcon
                    style={{ color: "#f54745" }}
                    className="ml-20"
                    onClick={(): void => handleDelete(user.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Box className="border mt-80 mb-20 pl-15 pr-32 py-20 text-sm flex justify-between items-center">
        <div>
          <p>Changer</p>
          <div className="pt-32 flex">
            <Pagination
              count={Math.round(allCount / perCount)}
              defaultValue={pageNumber}
              variant="outlined"
              shape="rounded"
              onChange={(event, page): void => handleChangePage(page)}
            />
            <Select
              labelId="label"
              id="select"
              value={perCount.toString()}
              size="small"
              style={{ height: "32px" }}
              onChange={(event): void =>
                handleChangePerPage(event.target.value)
              }
            >
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="15">15</MenuItem>
              <MenuItem value="20">20</MenuItem>
            </Select>
          </div>
        </div>
        <div>
          <p className="text-lg text-[#878787]">
            Total number of users{" "}
            <span className="text-[#407EFF] font-bold">{allCount}</span>
          </p>
        </div>
      </Box>
    </section>
  );
};

export default UserListTable;
