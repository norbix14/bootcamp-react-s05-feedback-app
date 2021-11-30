import { Link, useLocation } from 'react-router-dom';

import CommentsSection from '../comments/CommentsSection';
import CommentWriter from '../comments/CommentWriter';
import FeedbackData from './FeedbackData';

export default function FeedbackInfo () {
  const { state } = useLocation();

  return (
    <>
      <section className="feedback-section">
        <div className="feedback-header">
          <div className="back-home">
            <Link to="/" className="btn btn-back">
              <i className="fas fa-chevron-left"></i>go back
            </Link>
          </div>
          <div className="edit-feedback">
            <button className="btn btn-edit">edit feedback</button>
          </div>
        </div>
      </section>
      <FeedbackData feedback={state} />
      <CommentsSection />
      <CommentWriter />
    </>
  );
}
