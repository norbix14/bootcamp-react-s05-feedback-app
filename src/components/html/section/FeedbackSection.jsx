export default function FeedbackSection () {
  return (
    <section className="main-section section-feedbacks">
      <div className="main-section-votes">
        <button type="button" className="btn btn-votes">
          <i className="fas fa-chevron-up"></i>
          <p>112</p>
        </button>
      </div>
      <div className="main-section-description">
        <h4>Add tags for solutions</h4>
        <p>Easier to search for solutions based on a specific stack</p>
        <button type="button" className="btn btn-tag">Enhancement</button>
      </div>
      <div className="main-section-comments">
        <i className="fas fa-comment"></i>
        <span>2</span>
      </div>
    </section>
  )
}
