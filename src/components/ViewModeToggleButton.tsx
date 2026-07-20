export default function ViewModeToggleButton({
  handleViewMode,
}: {
  handleViewMode: (mode: "List" | "Grid") => void;
}) {
  return (
    <div className="flex gap-2 mb-2.5">
      <button onClick={() => handleViewMode("List")} className="w-10 h-10 bg-blue-500 text-white rounded-lg text-center cursor-pointer">
        ☰
      </button>
      <button onClick={() => handleViewMode("Grid")} className="w-10 h-10 bg-white rounded-lg text-center cursor-pointer">
        ⊞
      </button>
    </div>
  );
}
