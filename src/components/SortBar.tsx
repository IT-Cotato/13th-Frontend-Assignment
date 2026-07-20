import { useState, useRef, useEffect } from 'react';
import './SortBar.css';

export type SortType = '생성순' | '완료순' | '이름순';

const SORT_OPTIONS: SortType[] = ['생성순', '완료순', '이름순'];

interface SortBarProps {
  sort: SortType;
  onSortChange: (sort: SortType) => void;
  hideCompleted: boolean;
  onHideCompletedChange: (hide: boolean) => void;
}

export default function SortBar({ sort, onSortChange, hideCompleted, onHideCompletedChange }: SortBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="sort-bar">
      <div className="sort-bar__left" ref={dropdownRef}>
        <span className="sort-bar__label">정렬:</span>
        <button
          type="button"
          className="sort-bar__trigger"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {sort}
          <svg
            width="16" height="16" viewBox="0 0 16 16" fill="none"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {isOpen && (
          <ul className="sort-bar__dropdown">
            {SORT_OPTIONS.map((option) => (
              <li
                key={option}
                className={`sort-bar__option ${sort === option ? 'selected' : ''}`}
                onClick={() => { onSortChange(option); setIsOpen(false); }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      <label className="sort-bar__toggle-label">
        완료 숨기기
        <input
          type="checkbox"
          className="sort-bar__toggle-input"
          checked={hideCompleted}
          onChange={(e) => onHideCompletedChange(e.target.checked)}
        />
        <span className="sort-bar__toggle-track">
          <span className="sort-bar__toggle-thumb" />
        </span>
      </label>
    </div>
  );
}
