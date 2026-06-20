import React from "react";

const CampusCollabLogo = () => {
  return (
    <div className="flex items-center gap-2.5 select-none ml-4 py-1">
      {/* Icon Group */}
      <div className="relative flex items-center justify-center w-10 h-10">
        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 rounded-xl opacity-20 blur-sm"></div>
        {/* Icon Container */}
        <div className="relative w-9 h-9 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md transform transition-transform duration-300 hover:rotate-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-white"
          >
            {/* Academic Cap Top */}
            <path d="M2 8l10-5 10 5-10 5L2 8z" />
            {/* Academic Cap Base */}
            <path d="M6 10v4c0 2 2.5 3.5 6 3.5s6-1.5 6-3.5v-4" />
            {/* Tassel */}
            <path d="M20 9.5v5.5a1 1 0 0 1-1 1h-1" />
            {/* Small nodes representing connection/collaboration */}
            <circle cx="12" cy="12.5" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="18" cy="14" r="1" fill="currentColor" stroke="none" />
            <circle cx="6" cy="14" r="1" fill="currentColor" stroke="none" />
          </svg>
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center leading-tight">
        <span className="font-dmsans font-extrabold text-xl tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          CampusCollab
        </span>
        <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase">
          Co-Learning Space
        </span>
      </div>
    </div>
  );
};

export default CampusCollabLogo;
