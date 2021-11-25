export default function CommentWriter () {
  return (
    <section className="comments-section">
      <h3>Add Comment</h3>
      <div className="comment-writer-container">
        <textarea 
          className="comment-writer"
          name="comment"
          id="comment"
          rows="10"
          placeholder="Type your comment here"
          maxLength="250"
        ></textarea>
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
  );
}
