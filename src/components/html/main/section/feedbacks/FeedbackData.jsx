export default function FeedbackData ({ feedback }) {
  const { votes, title, description, tag, comments } = feedback;

  return (
    <section className="main-section section-feedbacks">
      <div className="main-section-votes">
        <button type="button" className="btn btn-votes">
          <i className="fas fa-chevron-up"></i>
          <p>{votes}</p>
        </button>
      </div>
      <div className="main-section-description">
        <h4>{title}</h4>
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
