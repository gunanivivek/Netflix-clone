import React from "react";
import { ArrowRight } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { useNavigate } from "react-router-dom";

const Security: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] flex flex-col sm:flex-row justify-center py-5 sm:py-20 px-4">
      <Sidebar />
      <div className="w-full max-w-3xl space-y-8 mt-4">
        {/* Account Heading */}
        <div>
          <h1 className="text-4xl font-bold text-black">Security</h1>
          <p className="text-black font-sans text-lg">Account details</p>
        </div>

        {/* Membership details card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer" onClick={() => navigate("/password")}>
            <div className="flex items-center gap-3 text-black">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="LockMedium"
                data-icon-id=":r80:"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7H19C20.1046 7 21 7.89543 21 9V18.6529C21 19.6274 20.2885 20.4855 19.2814 20.6076C18.0287 20.7593 15.492 21 12 21C8.50801 21 5.97128 20.7593 4.71855 20.6076C3.71153 20.4855 3 19.6274 3 18.6529V9C3 7.89543 3.89543 7 5 7H7V6ZM15 6V7H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM5 9V18.627C6.19927 18.7708 8.63769 19 12 19C15.3623 19 17.8007 18.7708 19 18.627V9H5ZM11 12V16H13V12H11Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="ml-2 text-xl font-[700] font-sans">
                Password
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-500" />
          </div>
          <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3 text-black">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="EnvelopeMedium"
                data-icon-id=":r82:"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H20.4134H3.58661H2ZM2 6.22132V19H22V6.22132C21.9292 6.31139 21.8489 6.39791 21.7587 6.47988L20.4134 5H3.58661L12 12.6485L20.4134 5L21.7587 6.47988L12.6727 14.7399L12 15.3515L11.3273 14.7399L2.24126 6.47988C2.15109 6.3979 2.07079 6.31139 2 6.22132Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div>
                <span className="ml-2 text-xl font-[700] font-sans">Email</span>{" "}
                <br />
                <span className="ml-2 text-lg font-sans">
                  tgunani19@gmail.com
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-500" />
          </div>
          <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3 text-black">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="PhoneMedium"
                data-icon-id=":r85:"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div>
                <span className="ml-2 text-xl font-[700] font-sans">
                  Mobile Phone
                </span>{" "}
                <br />
                <span className="ml-2 text-lg font-sans">98******00</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-gray-600 mb-2">Access and Privacy</p>
          <div className="bg-white rounded-lg shadow-sm text-black border border-gray-200 divide-y divide-gray-200">
            <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3 text-black">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  data-icon="TvMobileMedium"
                  data-icon-id=":r87:"
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
                <div>
                  <span className="ml-2 text-xl font-[700] font-sans">
                    Access and Devices
                  </span>{" "}
                  <br />
                  <span className="ml-2 text-lg font-sans">
                    Manage Signed in Devices
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3 text-black">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  data-icon="ProfileArrowMedium"
                  data-icon-id=":r89:"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  role="img"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 1C3.79086 1 2 2.79086 2 5V17C2 19.2091 3.79086 21 6 21H9.58579L8.29289 22.2929L9.70711 23.7071L12.7071 20.7071C13.0976 20.3166 13.0976 19.6834 12.7071 19.2929L9.70711 16.2929L8.29289 17.7071L9.58579 19H6C4.89543 19 4 18.1046 4 17V5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V17C20 18.1046 19.1046 19 18 19H15V21H18C20.2091 21 22 19.2091 22 17V5C22 2.79086 20.2091 1 18 1H6ZM7.5 10C8.32843 10 9 9.32843 9 8.5C9 7.67157 8.32843 7 7.5 7C6.67157 7 6 7.67157 6 8.5C6 9.32843 6.67157 10 7.5 10ZM18 8.5C18 9.32843 17.3284 10 16.5 10C15.6716 10 15 9.32843 15 8.5C15 7.67157 15.6716 7 16.5 7C17.3284 7 18 7.67157 18 8.5ZM16.402 12.1985C15.7973 12.6498 14.7579 13 13.5 13C12.2421 13 11.2027 12.6498 10.598 12.1985L9.40195 13.8015C10.4298 14.5684 11.9192 15 13.5 15C15.0808 15 16.5702 14.5684 17.598 13.8015L16.402 12.1985Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div>
                  <span className="ml-2 text-xl font-[700] font-sans">
                    Profile Transfer
                  </span>{" "}
                  <br />
                  <span className="ml-2 text-lg font-sans">On</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3 text-black">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  data-icon="ShieldCheckmarkMedium"
                  data-icon-id=":r8b:"
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
                <div>
                  <span className="ml-2 text-xl font-[700] font-sans">
                    Personal Info Access
                  </span>{" "}
                  <br />
                  <span className="ml-2 text-lg font-sans">
                    Request a info of your personal info
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3 text-black">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  data-icon="LabFlaskMedium"
                  data-icon-id=":r8d:"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  role="img"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 12.1852L9.62136 12.7094L7.96706 15H16.0329L14.3786 12.7095L14 12.1852V11.5385V10H12V8L14 8V6L12 6V4L14 4V2H10V11.5385V12.1852ZM17.4774 17H6.52262L4.05659 20.4145C3.57896 21.0758 4.0515 22 4.86726 22H19.1327C19.9485 22 20.421 21.0758 19.9434 20.4145L17.4774 17ZM16 11.5385V2H17V0H16H14H10H8.00001H7V2H8.00001V11.5385L2.43523 19.2435C1.00235 21.2275 2.41996 24 4.86726 24H19.1327C21.58 24 22.9976 21.2275 21.5648 19.2435L16 11.5385Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div>
                  <span className="ml-2 text-xl font-[700] font-sans">
                    Feature Testing
                  </span>{" "}
                  <br />
                  <span className="ml-2 text-lg font-sans">On</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
