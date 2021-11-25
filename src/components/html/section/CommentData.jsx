export default function CommentData () {
  return (
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
  );
}
