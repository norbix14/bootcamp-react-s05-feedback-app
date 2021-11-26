export default function CommentData ({ comment }) {
  const { user, nickname, comment:comm } = comment;
  return (
    <div className="comment-data">
      <div className="comment-profile-img">
        <div className="profile-img-container">
          <img src="logo512.png" alt="profile" className="profile-image" />
        </div>
      </div>
      <div className="comment-author-info">
        <h4>{user}</h4>
        <p>{nickname}</p>
        <p>{comm}</p>
      </div>
      <div className="comment-reply">
        <button className="btn btn-reply">Reply</button>
      </div>
    </div>
  );
}
