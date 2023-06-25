import React, { FC, ReactElement, useEffect, useState } from "react";
import { menuProps } from "../../@types/common";
import HomePageIcon from "../../assets/images/menuIcons/f262.svg";
import UsersIcon from "../../assets/images/menuIcons/Users.svg";
import RestaurantIcon from "../../assets/images/menuIcons/Job_seeker.svg";
import UserIcon from "../../assets/images/menuIcons/f39f.svg";
import ShopIcon from "../../assets/images/menuIcons/Component_23.svg";
import CuisineIcon from "../../assets/images/menuIcons/Group_257.svg";
import PostIcon from "../../assets/images/menuIcons/Dish_fill.svg";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems: menuProps[] = [
  {
    title: "Homepage",
    subMenu: [],
    iconPath: HomePageIcon,
    src: "/",
    index: 0,
  },
  { title: "Users", subMenu: [], iconPath: UsersIcon, src: "/users", index: 1 },
  {
    title: "Premium users",
    subMenu: [],
    iconPath: UsersIcon,
    src: "/premium-users",
    index: 2,
  },
  {
    title: "Restaurants",
    subMenu: [],
    iconPath: RestaurantIcon,
    src: "/restaurants",
    index: 3,
  },
  {
    title: "Learn",
    subMenu: ["Quick Start", "Recipes", "Books", "Movies", "Dietician"],
    iconPath: UserIcon,
    src: "/learn",
    index: 4,
  },
  { title: "Shop", subMenu: [], iconPath: ShopIcon, src: "/shop", index: 5 },
  {
    title: "Cuisine",
    subMenu: [],
    iconPath: CuisineIcon,
    src: "/cuisine",
    index: 6,
  },
  { title: "Post", subMenu: [], iconPath: PostIcon, src: "/post", index: 7 },
];

const AdminPanelList: FC = (): ReactElement => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number>();
  const location = useLocation();

  const handleClick = (index: number, src: string): void => {
    setActiveIndex(index);
    navigate(src);
  };

  useEffect(() => {
    const locationPathName = location.pathname;

    if (locationPathName !== "/") {
      const activeTab = menuItems.find(
        (item) => location.pathname.includes(item.src) && item.src !== "/"
      );
      setActiveIndex(activeTab?.index);
    } else {
      setActiveIndex(0);
    }
  }, []);

  return (
    <div className="w-60 bg-[#2D3347] top-0 left-0 pb-20 h-full fixed overflow-y-scroll">
      <div className="h-17.5 bg-[#272D3E]"></div>
      <div className="text-[#788195] text-sm font-medium pt-48">
        {menuItems.map((item, index) => {
          return (
            <div key={"item_" + index} className="cursor-pointer">
              <div
                className={`h-10.5 flex items-center menuItem ${
                  activeIndex === item.index && "bg-[#1F2430] text-white"
                }`}
                onClick={(): void => handleClick(item.index, item.src)}
              >
                <div className="w-full flex pl-32">
                  <img
                    className={`menuIcon  ${
                      activeIndex === item.index && "activeMenuItem"
                    }`}
                    src={item.iconPath}
                    alt={item.title}
                  />
                  <p className="pl-16">{item.title}</p>
                </div>
              </div>
              <div>
                {item.subMenu.map((subMenuItem, subMenuIndex) => {
                  return (
                    <div
                      key={"subMenuItem_" + subMenuIndex}
                      className="hover:bg-[#1F2430] hover:text-white h-10.5 flex items-center pl-80"
                    >
                      {subMenuItem}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminPanelList;
