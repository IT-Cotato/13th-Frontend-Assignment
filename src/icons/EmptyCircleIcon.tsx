type EmptyCircleIconProps = {
    checked?: boolean;
  };
  
  export default function EmptyCircleIcon({
    checked = false,
  }: EmptyCircleIconProps) {
    return checked ? (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="11" fill="#22C55E" stroke="#22C55E" strokeWidth="2" />
        <path
          d="M8 12.5L10.5 15L16 9.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="11" stroke="#E5E7EB" strokeWidth="2" />
      </svg>
    );
  }