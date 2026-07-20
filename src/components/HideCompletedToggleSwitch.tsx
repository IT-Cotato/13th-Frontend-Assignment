export default function HideCompletedToggleButton({
  hide,
  handleHideMode,
}: {
  hide: boolean;
  handleHideMode: (hide: boolean) => void;
}) {

  return (
    <div className="flex items-center gap-2">
      <p className="text-sm">완료 숨기기</p>
      <button
        onClick={() => handleHideMode(hide)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${hide ? "bg-blue-500" : "bg-gray-300"}`}
      >
        <div
          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300
          ${hide ? "translate-x-7" : "translate-x-1"}`}
        />
      </button>
    </div>
  );
}
