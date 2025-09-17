import React from "react";
import { ArrowRight } from "lucide-react";
import Sidebar from "@/components/Sidebar";

const Devices: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] sm:flex flex-col sm:flex-row justify-center py-5 sm:py-20 px-4">
      <Sidebar />
      <div className="w-full max-w-3xl space-y-8 mt-4">
        
        <div>
          <h1 className="text-4xl font-bold text-black">Devices</h1>
          <p className="text-black font-sans text-lg">Account Access</p>
        </div>

        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3 text-black">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-icon="TvMobileMedium"
                data-icon-id=":r9r:"
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
        </div>

        {/* Quick links */}
        <div>
          <p className="text-gray-600 mb-2">Mobile Downloads</p>
          <div className="bg-white rounded-lg shadow-sm text-black border border-gray-200 divide-y divide-gray-200">
            <div className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3 text-black">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  data-icon="DownloadMedium"
                  data-icon-id=":r9t:"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  role="img"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 3V13.5858L15.2929 11.2929L16.7071 12.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L7.29286 12.7071L8.70708 11.2929L11 13.5858V3H13ZM1.11859 21.6355C4.58689 21.2212 8.23466 21 12 21C15.7653 21 19.413 21.2212 22.8813 21.6355L23.1186 19.6497C19.5701 19.2257 15.8431 19 12 19C8.15686 19 4.42984 19.2257 0.881348 19.6497L1.11859 21.6355Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div>
                  <span className="ml-2 text-xl font-[700] font-sans">
                    Mobile downloaded devices
                  </span>{" "}
                  <br />
                  <span className="ml-2 text-lg font-sans">
                    Using 1 of 1 downloaded devices
                  </span>
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

export default Devices;
