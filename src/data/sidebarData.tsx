import {
  AiOutlineHome,
  AiOutlineCreditCard,
  AiOutlineUser,
} from "react-icons/ai";

import { MdCompareArrows } from "react-icons/md";

export const sidebarData = [
  {
    title: "Home",
    icon: <AiOutlineHome />,
    path: "/",
  },
  {
    title: "Transactions",
    icon: <MdCompareArrows />,
    path: "/transactions",
  },
  {
    title: "Cards",
    icon: <AiOutlineCreditCard />,
    path: "/cards",
  },
  {
    title: "Profile",
    icon: <AiOutlineUser />,
    path: "/profile",
  },
];

export default sidebarData;
