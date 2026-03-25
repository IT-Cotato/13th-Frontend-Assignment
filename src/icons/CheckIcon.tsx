export default function CheckCircle() {
  return (
    <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#3B82F6] border-2 border-[#3B82F6]">
      <svg
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M1 5L5 9L13 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="14" height="10" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}