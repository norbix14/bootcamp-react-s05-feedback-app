import CommentsSection from './CommentsSection';
import CommentWriter from './CommentWriter';
import FeedbackSection from './FeedbackSection';

export default function FeedbackInfo () {
  return (
    <>
      <section className="feedback-section">
        <div className="feedback-header">
          <div className="back-home">
            <a href="/" className="btn-back">
              <i className="fas fa-chevron-left"></i>go back
            </a>
          </div>
          <div className="edit-feedback">
            <button className="btn btn-edit">edit feedback</button>
          </div>
        </div>
      </section>
      <FeedbackSection />
      <CommentsSection />
      <CommentWriter />
    </>
  );
}
