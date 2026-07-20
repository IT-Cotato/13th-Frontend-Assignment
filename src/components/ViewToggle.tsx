import './ViewToggle.css';

export type ViewMode = 'list' | 'grid';

interface ViewToggleProps {
  viewMode: ViewMode;
  onToggle: (mode: ViewMode) => void;
}

export default function ViewToggle({ viewMode, onToggle }: ViewToggleProps) {
  return (
    <div className="view-toggle">
      <button
        type="button"
        className={`view-toggle-button ${viewMode === 'list' ? 'selected' : ''}`}
        aria-pressed={viewMode === 'list'}
        aria-label="목록형 보기"
        onClick={() => onToggle('list')}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1" y="3" width="16" height="2" rx="1" fill="currentColor"/>
          <rect x="1" y="8" width="16" height="2" rx="1" fill="currentColor"/>
          <rect x="1" y="13" width="16" height="2" rx="1" fill="currentColor"/>
        </svg>
      </button>
      <button
        type="button"
        className={`view-toggle-button ${viewMode === 'grid' ? 'selected' : ''}`}
        aria-pressed={viewMode === 'grid'}
        aria-label="갤러리형 보기"
        onClick={() => onToggle('grid')}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1" y="1" width="7" height="7" rx="1" fill="currentColor"/>
          <rect x="10" y="1" width="7" height="7" rx="1" fill="currentColor"/>
          <rect x="1" y="10" width="7" height="7" rx="1" fill="currentColor"/>
          <rect x="10" y="10" width="7" height="7" rx="1" fill="currentColor"/>
        </svg>
      </button>
    </div>
  );
}
