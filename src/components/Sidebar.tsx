import React from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const menu = [
    {
      name: "Overview",
      path: "/overview",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          data-icon="HomeMedium"
          data-icon-id=":r2l:"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          role="img"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.4855 2.14251C11.8022 1.9525 12.1978 1.9525 12.5145 2.14251L22.5145 8.14251C22.8157 8.32323 23 8.64874 23 9V21C23 21.5523 22.5523 22 22 22H15C14.4477 22 14 21.5523 14 21V16H10V21C10 21.5523 9.55228 22 9 22H2C1.44772 22 1 21.5523 1 21V9C1 8.64874 1.1843 8.32323 1.4855 8.14251L11.4855 2.14251ZM3 9.56619V20H8V15V14H9H15H16V15V20H21V9.56619L12 4.16619L3 9.56619Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
    {
      name: "Membership",
      path: "/membership",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          data-icon="CreditCardMedium"
          data-icon-id=":rce:"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          role="img"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 6C0 4.34315 1.34315 3 3 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H3C1.34314 21 0 19.6569 0 18V6ZM3 5C2.44772 5 2 5.44772 2 6V8H22V6C22 5.44771 21.5523 5 21 5H3ZM2 18V10H22V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18ZM16 16H20V14H16V16Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
    {
      name: "Security",
      path: "/security",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          data-icon="ShieldCheckmarkMedium"
          data-icon-id=":rc1:"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          role="img"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.4061 1.08619C12.1476 0.971271 11.8524 0.971271 11.5939 1.08619L1.59387 5.53063C1.21945 5.69704 0.984428 6.07501 1.0008 6.48441C1.11201 9.2645 1.36208 12.7774 2.80051 15.8916C4.26941 19.0717 6.95244 21.7837 11.7603 22.9708C11.9177 23.0097 12.0823 23.0097 12.2397 22.9708C17.0476 21.7837 19.7306 19.0717 21.1995 15.8916C22.6379 12.7774 22.888 9.2645 22.9992 6.48441C23.0156 6.07501 22.7806 5.69704 22.4061 5.53063L12.4061 1.08619ZM4.61617 15.0529C3.46121 12.5525 3.15696 9.68464 3.02915 7.08136L12 3.09432L20.9709 7.08136C20.8431 9.68464 20.5388 12.5525 19.3838 15.0529C18.1819 17.6551 16.0369 19.9059 12 20.968C7.96307 19.9059 5.81813 17.6551 4.61617 15.0529ZM11.7071 15.7071L17.7071 9.70711L16.2929 8.29289L11 13.5858L8.70711 11.2929L7.29289 12.7071L10.2929 15.7071L11 16.4142L11.7071 15.7071Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
    {
      name: "Devices",
      path: "/devices",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          data-icon="TvMobileMedium"
          data-icon-id=":r9v:"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          role="img"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 3.72727C0 2.77333 0.773326 2 1.72727 2H20.2727C21.2267 2 22 2.77333 22 3.72727V7H20V4H2V14H13V16H1.72727C0.773325 16 0 15.2267 0 14.2727V3.72727ZM13 17.3114C12.012 17.2708 11.0113 17.25 10 17.25C8.2756 17.25 6.5822 17.3104 4.92974 17.4268L5.07026 19.4218C6.67567 19.3088 8.32219 19.25 10 19.25C11.0121 19.25 12.0128 19.2714 13 19.3132V17.3114ZM22 11H17V20H22V11ZM17 9C15.8954 9 15 9.89543 15 11V20C15 21.1046 15.8954 22 17 22H22C23.1046 22 24 21.1046 24 20V11C24 9.89543 23.1046 9 22 9H17ZM19.5 18.5C19.9142 18.5 20.25 18.1642 20.25 17.75C20.25 17.3358 19.9142 17 19.5 17C19.0858 17 18.75 17.3358 18.75 17.75C18.75 18.1642 19.0858 18.5 19.5 18.5Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
    {
      name: "Profiles",
      path: "/profile",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          data-icon="ProfilesFillMedium"
          data-icon-id=":rcf:"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          role="img"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17L5 9C5 6.79086 6.79086 5 9 5H17C17 3.89543 16.1046 3 15 3ZM19 5C21.2091 5 23 6.79086 23 9V19C23 21.2091 21.2091 23 19 23H9C6.79086 23 5 21.2091 5 19C2.79086 19 1 17.2091 1 15V5C1 2.79086 2.79086 1 5 1H15C17.2091 1 19 2.79086 19 5ZM11 11.5C11 12.3284 10.3284 13 9.5 13C8.67157 13 8 12.3284 8 11.5C8 10.6716 8.67157 10 9.5 10C10.3284 10 11 10.6716 11 11.5ZM20 11.5C20 12.3284 19.3284 13 18.5 13C17.6716 13 17 12.3284 17 11.5C17 10.6716 17.6716 10 18.5 10C19.3284 10 20 10.6716 20 11.5ZM19.1566 16.7542C19.5732 16.3916 19.6169 15.7599 19.2542 15.3434C18.8916 14.9268 18.2599 14.8831 17.8434 15.2458C17.3566 15.6696 16.5195 16 15.5 16C14.4805 16 13.6434 15.6696 13.1566 15.2458C12.7401 14.8831 12.1084 14.9268 11.7458 15.3434C11.3831 15.7599 11.4268 16.3916 11.8434 16.7542C12.7559 17.5486 14.0863 18 15.5 18C16.9137 18 18.2441 17.5486 19.1566 16.7542Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
  ];

  const Navigate = useNavigate();

  return (
    <>
      <aside className="hidden sm:block w-64 p-6">
        {/* Back to Netflix */}
        <button
          className="flex items-center text-xl font-medium text-black hover:underline mb-8"
          onClick={() => Navigate("/")}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Netflix
        </button>

        {/* Vertical Menu for Desktop */}
        <nav className="  ">
          {menu.map((item, idx) => (
            <button
              key={idx}
              className={`flex items-center w-full text-left px-3 py-3 text-lg rounded-md ${
                location.pathname === item.path
                  ? "bg-gray-100 text-black font-bold"
                  : "text-gray-800 hover:bg-gray-200 font-medium cursor-pointer"
              }`}
              onClick={() => Navigate(item.path)}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>
      </aside>
      <nav className="sm:hidden w-full flex mt-14 overflow-x-auto border-b bg-white px-2">
        {menu.map((item, idx) => (
          <button
            key={idx}
            className={`whitespace-nowrap px-4 py-3 text-sm border-b-2 ${
              location.pathname === item.path
                ? "border-black text-black font-semibold"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
            onClick={() => Navigate(item.path)}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
