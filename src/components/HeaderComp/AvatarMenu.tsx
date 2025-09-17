import { logout } from "@/features/auth/authSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { Link } from "react-router-dom";

const AvatarMenu = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-16 rounded-xl">
          <img src="https://i.pravatar.cc/100" alt="User Avatar" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <div className="font-medium text-base gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-blocks-icon lucide-blocks"
            >
              <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" />
              <rect x="14" y="2" width="8" height="8" rx="1" />
            </svg>
            <Link to="/overview">Children</Link>
          </div>
        </li>
        <li>
          <div className="font-medium text-base gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-pencil-icon lucide-pencil"
            >
              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
              <path d="m15 5 4 4" />
            </svg>
            <Link to="/profile">Manage Profile</Link>
          </div>
        </li>
        <li>
          <div className="font-medium text-base gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-users-round-icon lucide-users-round"
            >
              <path d="M18 21a8 8 0 0 0-16 0" />
              <circle cx="10" cy="8" r="5" />
              <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
            </svg>
            <Link to="/profile">Account</Link>
          </div>
        </li>
        <li>
          <div className="font-medium text-base gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
            <Link to="/help">Help Center</Link>
          </div>
        </li>
        <li>
          <div className="mt-2 flex justify-center text-center border border-t-2 border-gray-600 font-medium text-base">
            <button onClick={() => dispatch(logout())}>
              Sign Out of Netflix
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default AvatarMenu;
