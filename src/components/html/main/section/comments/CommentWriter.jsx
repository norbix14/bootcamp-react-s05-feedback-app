import { useState } from 'react';

export default function CommentWriter () {
  const initialStateComment = { comment: '' };
  const initialStateCounter = { counter: 0 };

  const [ charcounter, setCharCounter ] = useState(initialStateCounter);
  const [ comment, setComment ] = useState(initialStateComment);

  const { comment:val } = comment
  const { counter } = charcounter;

  const handleInputChange = e => {
    let { target: { name, value } } = e;
    setComment(prev => ({...prev, [name]: value}));
  };

  const handleKeyupChange = e => {
    let { keyCode } = e;
    let emptyValue = val.trim() === '';
    if (keyCode === 8) {
      setCharCounter(prev => {
        return {
          ...prev,
          counter: prev.counter === 0 || emptyValue ? 0 : prev.counter - 1
        }
      })
    }
  };

  const handleKeypressChange = () => {
    setCharCounter(prev => {
      return {
        ...prev,
        counter: prev.counter > 250 ? 250 : prev.counter + 1
      }
    });
  };

  const handleClickPostComment = () => {
    if (val.trim() === '') {
      console.log('ingresar comentario');
      return
    }
    console.log(val);
    setComment(initialStateComment);
    setCharCounter(initialStateCounter);
  };

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
          value={val}
          onChange={handleInputChange}
          onKeyUp={handleKeyupChange}
          onKeyPress={handleKeypressChange}
        ></textarea>
      </div>
      <div className="comment-writer-tracker">
        <div className="word-tracker">
          <p>
            <span id="wordCounter">{counter}</span> / 250
          </p>
        </div>
        <div className="post-comment">
          <button
            className="btn btn-post-comment"
            onClick={handleClickPostComment}
          >post comment</button>
        </div>
      </div>
    </section>
  );
}
