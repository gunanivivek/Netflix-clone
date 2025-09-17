import React from "react";
import { ArrowRight } from "lucide-react";
import Sidebar from "@/components/Sidebar";

const Overview: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] flex flex-col sm:flex-row justify-center py-5 sm:py-20 px-4">
      <Sidebar />
      <div className="w-full max-w-3xl space-y-8 mt-4">
        {/* Account Heading */}
        <div>
          <h1 className="text-4xl font-bold text-black">Account</h1>
          <p className="text-black font-sans text-lg">Membership details</p>
        </div>

        {/* Membership details card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="py-4 border-b border-gray-200">
            <span className="justify-center text-center text-white text-lg font-medium px-3 py-1.5 w-2/6 rounded-e-2xl bg-gradient-to-r from-[#0c1d54] via-[#1630b4] to-[#445ef4]">
              Member since March 2024
            </span>
          </div>
          <div className="p-5">
            <p className="text-xl text-black font-sans font-semibold">
              Mobile plan
            </p>
            <p className="text-gray-800 text-lg mt-1">
              Next payment: 30 September 2025
            </p>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#e64a19"
                  d="M42.858,11.975c-4.546-2.624-10.359-1.065-12.985,3.481L23.25,26.927	c-1.916,3.312,0.551,4.47,3.301,6.119l6.372,3.678c2.158,1.245,4.914,0.506,6.158-1.649l6.807-11.789	C48.176,19.325,46.819,14.262,42.858,11.975z"
                ></path>
                <path
                  fill="#fbc02d"
                  d="M35.365,16.723l-6.372-3.678c-3.517-1.953-5.509-2.082-6.954,0.214l-9.398,16.275	c-2.624,4.543-1.062,10.353,3.481,12.971c3.961,2.287,9.024,0.93,11.311-3.031l9.578-16.59	C38.261,20.727,37.523,17.968,35.365,16.723z"
                ></path>
                <path
                  fill="#43a047"
                  d="M36.591,8.356l-4.476-2.585c-4.95-2.857-11.28-1.163-14.137,3.787L9.457,24.317	c-1.259,2.177-0.511,4.964,1.666,6.22l5.012,2.894c2.475,1.43,5.639,0.582,7.069-1.894l9.735-16.86	c2.017-3.492,6.481-4.689,9.974-2.672L36.591,8.356z"
                ></path>
                <path
                  fill="#1e88e5"
                  d="M19.189,13.781l-4.838-2.787c-2.158-1.242-4.914-0.506-6.158,1.646l-5.804,10.03	c-2.857,4.936-1.163,11.252,3.787,14.101l3.683,2.121l4.467,2.573l1.939,1.115c-3.442-2.304-4.535-6.92-2.43-10.555l1.503-2.596	l5.504-9.51C22.083,17.774,21.344,15.023,19.189,13.781z"
                ></path>
              </svg>
              <span className="text-gray-800 text-lg font-semibold">d•••@okaxis</span>
            </div>
          </div>
          <div className="px-6 py-3 border-t border-gray-200 hover:bg-gray-50 cursor-pointer flex justify-between items-center">
            <span className="font-[640] text-black text-xl">
              Manage membership
            </span>
            <ArrowRight className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-gray-600 mb-2">Quick links</p>
          <div className="bg-white rounded-lg shadow-sm text-black border border-gray-200 divide-y divide-gray-200">
            <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  data-icon="MyPlanMedium"
                  data-icon-id=":rgs:"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  role="img"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 3H3L3 9H5V7C5 5.89543 5.89543 5 7 5H9V3ZM3 11H5V17C5 18.1046 5.89543 19 7 19H13V21C13 22.1046 13.8954 23 15 23H21C22.1046 23 23 22.1046 23 21V15C23 13.8954 22.1046 13 21 13H19V7C19 5.89543 18.1046 5 17 5H11V3C11 1.89543 10.1046 1 9 1H3C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11ZM15 21V19H17C18.1046 19 19 18.1046 19 17V15H21V21H15ZM17 7H7V17H17V7ZM13.0103 10.8594L12 7.75L10.9897 10.8594H7.72025L10.3653 12.7812L9.35497 15.8906L12 13.9688L14.645 15.8906L13.6347 12.7812L16.2798 10.8594H13.0103Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-xl font-[700] font-sans">
                  Change plan
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  data-icon="CreditCardMedium"
                  data-icon-id=":rgu:"
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
                <span className="text-xl font-bold font-sans">
                  Manage payment method
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  data-icon="TvMobileMedium"
                  data-icon-id=":rh0:"
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
                <span className="text-xl font-bold font-sans">
                  Manage access and devices
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  data-icon="LockMedium"
                  data-icon-id=":rh2:"
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
                <span className="text-xl font-bold font-sans">
                  Update Password
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  data-icon="ProfileArrowMedium"
                  data-icon-id=":rh4:"
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
                <span className="text-xl font-bold font-sans">
                  Transfer a Profile
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  data-icon="HexagonExclamationPointMedium"
                  data-icon-id=":rh6:"
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
                <span className="text-xl font-bold font-sans">
                  Adjust Parental Controls
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  data-icon="SettingsMedium"
                  data-icon-id=":rh8:"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  role="img"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 0C9.50999 0 8.66897 0.724279 8.52211 1.70332L8.20178 3.83888C7.72042 4.06321 7.26254 4.32866 6.8326 4.63056L4.82179 3.83973C3.90049 3.47739 2.85273 3.8436 2.35774 4.70095L0.857735 7.29903C0.362739 8.15639 0.569471 9.24688 1.34392 9.86358L3.03434 11.2097C3.01158 11.4704 2.99999 11.734 2.99999 12C2.99999 12.266 3.01158 12.5296 3.03433 12.7903L1.34392 14.1364C0.569471 14.7531 0.362739 15.8436 0.857735 16.701L2.35774 19.299C2.85273 20.1564 3.90049 20.5226 4.82179 20.1603L6.8326 19.3694C7.26254 19.6713 7.72042 19.9368 8.20178 20.1611L8.52211 22.2967C8.66897 23.2757 9.50999 24 10.5 24H13.5C14.49 24 15.331 23.2757 15.4779 22.2967L15.7982 20.1611C16.2796 19.9368 16.7375 19.6713 17.1674 19.3694L19.1783 20.1603C20.0996 20.5226 21.1474 20.1564 21.6423 19.299L23.1423 16.701C23.6373 15.8436 23.4306 14.7531 22.6562 14.1364L20.9657 12.7902C20.9884 12.5295 21 12.2659 21 12C21 11.7341 20.9884 11.4705 20.9657 11.2098L22.6562 9.86359C23.4306 9.24689 23.6373 8.1564 23.1423 7.29904L21.6423 4.70096C21.1474 3.8436 20.0996 3.47739 19.1783 3.83973L17.1674 4.63059C16.7375 4.32867 16.2796 4.06321 15.7982 3.83888L15.4779 1.70332C15.331 0.724279 14.49 0 13.5 0H10.5ZM7.18558 6.9185C7.97439 6.1709 8.93714 5.60501 10.0068 5.28785L10.5 2H13.5L13.9932 5.28785C15.0629 5.60501 16.0256 6.17091 16.8144 6.91853L19.9103 5.70096L21.4103 8.29904L18.8093 10.3703C18.934 10.8932 19 11.4389 19 12C19 12.5611 18.934 13.1068 18.8093 13.6297L21.4103 15.701L19.9103 18.299L16.8144 17.0815C16.0256 17.8291 15.0629 18.395 13.9932 18.7122L13.5 22H10.5L10.0068 18.7121C8.93713 18.395 7.97438 17.8291 7.18557 17.0815L4.08979 18.299L2.58979 15.701L5.19073 13.6298C5.06602 13.1069 4.99999 12.5611 4.99999 12C4.99999 11.4389 5.06602 10.8931 5.19073 10.3702L2.58979 8.29903L4.08979 5.70095L7.18558 6.9185ZM9.99999 12C9.99999 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 9.99999 13.1046 9.99999 12ZM12 8C9.79085 8 7.99999 9.79086 7.99999 12C7.99999 14.2091 9.79085 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-xl font-bold font-sans">
                  Edit Settings
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
