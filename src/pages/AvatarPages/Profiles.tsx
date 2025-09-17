import React from "react";
import { ArrowRight } from "lucide-react";
import Sidebar from "@/components/Sidebar";

const Profiles: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] flex flex-col sm:flex-row justify-center py-5 sm:py-20 px-4">
      <Sidebar />
      <div className="ml-5 w-full max-w-3xl space-y-8 mt-4">
        {/* Account Heading */}
        <div>
          <h1 className="text-4xl font-bold text-black">Profiles</h1>
          <p className="text-black font-sans text-lg">
            Parental Controls and Permissions
          </p>
        </div>

        {/* Membership details card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3 text-black">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="HexagonExclamationPointMedium"
                data-icon-id=":rah:"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.76237 12.0001L7.38117 20.0001H16.6188L21.2376 12.0001L16.6188 4.00006H7.38117L2.76237 12.0001ZM0.74164 11.5001C0.563008 11.8095 0.563008 12.1907 0.741641 12.5001L5.93779 21.5001C6.11643 21.8095 6.44655 22.0001 6.80382 22.0001H17.1961C17.5534 22.0001 17.8835 21.8095 18.0621 21.5001L23.2583 12.5001C23.4369 12.1907 23.4369 11.8095 23.2583 11.5001L18.0621 2.50006C17.8835 2.19066 17.5534 2.00006 17.1961 2.00006H6.80382C6.44655 2.00006 6.11643 2.19066 5.93779 2.50006L0.74164 11.5001ZM13.5001 15.5C13.5001 16.3285 12.8285 17 12.0001 17C11.1716 17 10.5001 16.3285 10.5001 15.5C10.5001 14.6716 11.1716 14 12.0001 14C12.8285 14 13.5001 14.6716 13.5001 15.5ZM13.5001 7.00002H10.5001L11.0001 13H13.0001L13.5001 7.00002Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div>
                <span className="ml-2 text-xl font-[700] font-sans">
                  Adjust Parental Controls
                </span>{" "}
                <br />
                <span className="ml-2 text-lg font-sans">
                  Set maturity ratings, block titles
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
                data-icon-id=":raj:"
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
                  Transfer a Profile
                </span>{" "}
                <br />
                <span className="ml-2 text-lg font-sans">
                  Copy a profile to another account
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-gray-600 mb-2">Profile Settings</p>
          <div className="bg-white rounded-lg shadow-sm text-black border border-gray-200 divide-y divide-gray-200">
            <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3 text-black">
                <div className="avatar">
                  <div className="w-12 rounded-xl">
                    <img src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp" />
                  </div>
                </div>
                <span className="ml-2 text-xl font-semibold font-sans">
                  User Name 1
                </span>{" "}
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3 text-black">
                <div className="avatar">
                  <div className="w-12 rounded-xl">
                    <img src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp" />
                  </div>
                </div>
                <span className="ml-2 text-xl font-semibold font-sans">
                  User Name 2
                </span>{" "}
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </div>
            <button className="border-1 my-5 mx-7.5 border-gray-300 bg-gray-200 rounded-md px-4 py-2 text-black font-bold text-lg w-11/12 justify-center text-center hover:bg-gray-300">
              Add Profile
            </button>
            <p className="text-gray-600 font-semibold text-base text-center mb-5">
              Add up to 5 profile for anyone who lives with you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
