import type { Category } from '../types/todo';

interface CategoryBadgeProps {
  category: Category;
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const getCategoryStyles = (cat: Category) => {
    switch (cat) {
      case '공부': return { bg: '#EBF5FF', text: '#3B82F6' };
      case '운동': return { bg: '#E8F7EE', text: '#22C55E' };
      case '개인': return { bg: '#F5EFFF', text: '#A855F7' };
      case '업무': return { bg: '#FFF7ED', text: '#F59E0B' };
      default: return { bg: '#F3F4F6', text: '#6B7280' };
    }
  };

  const { bg, text } = getCategoryStyles(category);

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 600,
    backgroundColor: bg,
    color: text,
    width: 'fit-content',
  };

  return <div style={badgeStyle}>{category}</div>;
}