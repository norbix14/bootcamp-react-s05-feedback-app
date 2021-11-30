import { useNavigate } from 'react-router-dom';

export default function FeedbackSection ({ feedback }) {
  const navigate = useNavigate();

  const { id, votes, title, description, tag, comments } = feedback;

  const handleClickFeedback = () => {
    navigate('/feedback', { state: feedback });
  };

  const handleClickVote = (e) => {
    console.log('sumar 1 voto en ID: ', id);
  };

  return (
    <section className="main-section section-feedbacks">
      <div className="main-section-votes">
        <button type="button" className="btn btn-votes" onClick={handleClickVote}>
          <i className="fas fa-chevron-up"></i>
          <p>{votes}</p>
        </button>
      </div>
      <div className="main-section-description">
        <h4 onClick={handleClickFeedback}>{title}</h4>
        <p>{description}</p>
        <button type="button" className="btn btn-tag">{tag}</button>
      </div>
      <div className="main-section-comments">
        <i className="fas fa-comment"></i>
        <span>{comments}</span>
      </div>
    </section>
  )
}
