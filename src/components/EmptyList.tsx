import '../css/EmptyList.css';

export default function EmptyList() {
  return(
    <div className='empty-list'>
      <span className='empty-icon'>📋</span>
      <p className="empty-list-text">아직 할 일이 없어요</p>

    </div>
  )

}