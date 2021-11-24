import FeedbackSection from './FeedbackSection';

export default function FeedbackInfo () {
  return (
    <>
      <section className="feedback-section">
        <div className="feedback-header">
          <div className="back-home">
            <button className="btn-back">
              <i className="fas fa-chevron-left"></i>go back
            </button>
          </div>
          <div className="edit-feedback">
            <button className="btn btn-edit">edit feedback</button>
          </div>
        </div>
      </section>
      <FeedbackSection />
      <section className="comments-section">
        <h3>2 comments</h3>
        <div className="comment-data">
          <div className="comment-profile-img">
            <div className="profile-img-container">
              <img src="logo512.png" alt="profile" className="profile-image" />
            </div>
          </div>
          <div className="comment-author-info">
            <h4>Suzanne Change</h4>
            <p>@upbeat1811</p>
            <p>Awesome idea!</p>
          </div>
          <div className="comment-reply">
            <button className="btn btn-reply">Reply</button>
          </div>
        </div>
        <div className="comment-data">
          <div className="comment-profile-img">
            <div className="profile-img-container">
              <img src="logo512.png" alt="profile" className="profile-image" />
            </div>
          </div>
          <div className="comment-author-info">
            <h4>Thomas Hood</h4>
            <p>@brawnybrave</p>
            <p>Awesome idea! Please use some nice color</p>
          </div>
          <div className="comment-reply">
            <button className="btn btn-reply">Reply</button>
          </div>
        </div>
      </section>
      <section className="comments-section">
        <h3>Add Comment</h3>
        <div className="comment-writer-container">
          <textarea className="comment-writer" name="comment" id="comment" rows="10" placeholder="Type your comment here" maxLength="250"></textarea>
        </div>
        <div className="comment-writer-tracker">
          <div className="word-tracker">
            <p><span id="wordCounter">0</span> / 250</p>
          </div>
          <div className="post-comment">
            <button className="btn btn-post-comment">post comment</button>
          </div>
        </div>
      </section>
    </>
  )
}
