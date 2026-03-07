"use client";
import { useState } from "react";

const EndpointCard = ({
  method = "GET",
  title = "Weather",
  status = "ONLINE",
  path = "",
}) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const methodConfig = {
    GET: "bg-[#fe9ec7] text-white",
    POST: "bg-emerald-400 text-white",
    PUT: "bg-amber-400 text-white",
    DELETE: "bg-rose-500 text-white",
    PATCH: "bg-sky-400 text-white",
  };

  const statusConfig = {
    ONLINE: "bg-[#fde8f2] text-[#fe9ec7] border border-[#fbc8e2]",
    OFFLINE: "bg-rose-100 text-rose-400 border border-rose-200",
    PENDING: "bg-amber-100 text-amber-500 border border-amber-200",
  };

  const methodStyle =
    methodConfig[method?.toUpperCase()] ?? "bg-[#fe9ec7] text-white";
  const statusStyle =
    statusConfig[status?.toUpperCase()] ?? statusConfig["ONLINE"];

  const handleCopy = () => {
    navigator.clipboard.writeText(`neuraapi.vercel.app${path}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="w-full rounded-2xl bg-[#fdf0f7] border border-[#fce4f0] shadow-sm overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Main Row */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between w-full px-4 py-3 hover:bg-[#fce8f5] transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-lg tracking-widest ${methodStyle}`}
          >
            {method?.toUpperCase()}
          </span>
          <span className="text-sm font-semibold text-gray-700">{title}</span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`text-[11px] font-bold px-3 py-1 rounded-full tracking-widest ${statusStyle}`}
          >
            {status?.toUpperCase()}
          </span>
          <span
            className={`text-[#fe9ec7] transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
          >
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      </button>

      {/* Dropdown */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          open ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 pb-3 pt-1 flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 bg-white border border-[#fce4f0] rounded-xl px-3 py-2">
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fe9ec7"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101"
              />
            </svg>
            <span className="text-xs text-gray-500 truncate flex-1">
              {path || "No path provided"}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 bg-[#fe9ec7] hover:bg-[#fd7fb8] active:scale-95 text-white text-xs font-semibold px-3 py-2 rounded-xl transition-all duration-150"
          >
            {copied ? (
              <>
                <svg
                  width="13"
                  height="13"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg
                  width="13"
                  height="13"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndpointCard;
