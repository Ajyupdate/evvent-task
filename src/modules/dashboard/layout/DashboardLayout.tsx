"use client";
import Nav from "@/components/Nav";
import { Avatar, Box } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import {
  AiFillDollarCircle,
  AiFillMessage,
  AiOutlineClose,
} from "react-icons/ai";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { MdHomeRepairService } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
export default function PageLayout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const pathName = usePathname();

  const closeSidebar = () => {
    const sidebar = document.getElementById("sidebar-multi-level-sidebar");
    sidebar?.classList.add("-translate-x-full");
  };
  return (
    <Box>
      <div>
        <div className="flex justify-start">
          <button
            data-drawer-target="sidebar-multi-level-sidebar"
            data-drawer-toggle="sidebar-multi-level-sidebar"
            aria-controls="sidebar-multi-level-sidebar"
            type="button"
            className="absolute top-0 inline-flex items-center p-2 mt-8 mr-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>
        <aside
          id="sidebar-multi-level-sidebar"
          className=" rounded-custom  shadow-md  absolute top-0 md:top-0  left-0 z-40 w-64  transition-transform -translate-x-full sm:translate-x-0 "
          aria-label="Sidebar"
        >
          <button
            onClick={closeSidebar}
            className="md:hidden absolute top-0 right-0"
          >
            <AiOutlineClose />
          </button>
          <div className="mt-2  h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-col  ">
            <div className="flex justify-center">
              <button className="h-12 bg-custom-pink-500 hover:bg-pink-700 text-white font-extrabold py-2 px-4 rounded-lg">
                evvent.no
              </button>
            </div>

            <div className="mt-8">
              <ul className="space-y-6 font-medium px-4">
                <li>
                  <button
                    type="button"
                    className={`${
                      pathName === "/" ? "bg-black text-white" : ""
                    } flex font-bold items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-700 hover:text-white dark:text-white dark:hover:bg-gray-700`}
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <svg
                      className={`${
                        pathName === "/" ? " text-white" : ""
                      } w-5 h-5 text-black transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 21"
                    >
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                    <span className="flex-1 ml-3 text-left  whitespace-nowrap">
                      Dashboard
                    </span>
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <ul id="dropdown-example" className="hidden  ">
                    <li>
                      <a
                        href="/"
                        className="flex items-center w-full  text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Overview
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
                        className="pt-2 flex items-center w-full  text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Transaction List
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <button
                    type="button"
                    className={`${
                      pathName === "/service" ? "bg-black text-white" : ""
                    } flex items-center font-bold w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:text-white hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700`}
                    aria-controls="dropdown-examplee"
                    data-collapse-toggle="dropdown-examplee"
                  >
                    <MdHomeRepairService />
                    <span className="flex-1 ml-3 text-left whitespace-nowrap ">
                      Services
                    </span>
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <ul id="dropdown-examplee" className="hidden py-2 space-y-2">
                    <li>
                      <a
                        href="/service"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Invoice
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/analytics"
                    className={`${
                      pathName === "/analytics" ? "bg-black text-white" : ""
                    } font-bold flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 group`}
                  >
                    <HiOutlineArrowTrendingUp />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Analytics
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/earnings"
                    className={`${
                      pathName === "/earnings" ? "bg-black text-white" : ""
                    }
                  font-bold flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 group`}
                  >
                    <AiFillDollarCircle />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Earnings
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <hr className="border-t-2 border-gray-300 mb-8 mt-12" />
            <div className="mt-4">
              <ul className="space-y-4 font-medium px-4">
                <li>
                  <a
                    href="/my-profile"
                    className={`${
                      pathName === "/my-profile" ? "bg-black text-white" : ""
                    } font-bold flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 group`}
                  >
                    <Avatar
                      size="xs"
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                    />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      My Profile
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/messages"
                    className={`${
                      pathName === "/messages" ? "bg-black text-white" : ""
                    }font-bold flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 group`}
                  >
                    <AiFillMessage />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      My Messages
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/auth/sign-in"
                    className={`${
                      pathName === "/auth/sign-in" ? "bg-black text-white" : ""
                    } 
                  font-bold flex items-center p-2 text-gray-900 hover:text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group`}
                  >
                    <MdHomeRepairService />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Sign In
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/auth/sign-up"
                    className={`${
                      pathName === "/auth/sign-up" ? "bg-black text-white" : ""
                    } font-bold flex items-center p-2 text-gray-900 hover:text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 group`}
                  >
                    <PiSignOutBold />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Sign Up
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <div className="p-6 sm:ml-64 ">
          <Box mr={{ md: "10%" }}>
            <Nav title={title} />
            {children}
          </Box>
        </div>{" "}
      </div>
    </Box>
  );
}
