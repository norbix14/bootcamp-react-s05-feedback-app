import CommentData from './CommentData';

import { comments } from '../../../mocks/faker';

export default function CommentsSection () {
  const commentaries = comments();
  return (
    <section className="comments-section">
      <h3>2 comments</h3>
      {
        commentaries.map((comment, i) => (
          <CommentData
            key={i}
            comment={comment}
          />
        ))
      }
    </section>
  );
}
