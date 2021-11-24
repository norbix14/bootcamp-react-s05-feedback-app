import './App.css';

function App() {
  return (
    <div className="container">
      <div className="main-container">
        <aside className="aside">
          <section className="aside-header">
            <h2>frontend mentor</h2>
            <h6>feedback board</h6>
          </section>
          <section className="aside-section aside-tags">
            <button type="button" className="btn btn-tag btn-tag-active">All</button>
            <button type="button" className="btn btn-tag">UI</button>
            <button type="button" className="btn btn-tag">UX</button>
            <button type="button" className="btn btn-tag">Enhencement</button>
            <button type="button" className="btn btn-tag">Bug</button>
            <button type="button" className="btn btn-tag">Feature</button>
          </section>
          <section className="aside-section aside-roadmap">
            <div className="roadmap-header">
              <h3>Roadmap</h3>
              <a href="/view">View</a>
            </div>
            <div className="roadmap-body">
              <div className="roadmap-body-item">
                <span className="pointer color-yellow"></span>
                <span className="status">planned</span>
                <span className="tasks">2</span>
              </div>
              <div className="roadmap-body-item">
                <span className="pointer color-purple"></span>
                <span className="status">in progress</span>
                <span className="tasks">3</span>
              </div>
              <div className="roadmap-body-item">
                <span className="pointer color-green"></span>
                <span className="status">live</span>
                <span className="tasks">1</span>
              </div>
            </div>
          </section>
        </aside>
        <main className="main">
          <div className="main-header">
            <div className="main-suggestions">
              <i className="fas fa-lightbulb"></i>
              <span><em>6</em> suggestions</span>
            </div>
            <div className="main-sorting">
              <span>Sort by: </span>
              <select className="sort-options" name="sortoptions" id="sortOptions">
                <option value="mostupvoted">Most Upvoted</option>
                <option value="leastupvoted">Least Upvoted</option>
                <option value="mostcomments">Most Comments</option>
                <option value="leastcomments">Least Comments</option>
              </select>
            </div>
            <div className="main-feedback">
              <button className="btn btn-feedback">
                <i className="fas fa-plus"></i> Add feedback
              </button>
            </div>
          </div>
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
          <section className="main-section section-feedbacks">
            <div className="main-section-votes">
              <button type="button" className="btn btn-votes">
                <i className="fas fa-chevron-up"></i>
                <p>112</p>
              </button>
            </div>
            <div className="main-section-description">
              <h4>Add tags for solutions</h4>
              <p>Easy to search for solutions based on a specific stack</p>
              <button type="button" className="btn btn-tag">Enhancement</button>
            </div>
            <div className="main-section-comments">
              <i className="fas fa-comment"></i>
              <span>2</span>
            </div>
          </section>
          <section className="main-section section-feedbacks">
            <div className="main-section-votes">
              <button type="button" className="btn btn-votes">
                <i className="fas fa-chevron-up"></i>
                <p>112</p>
              </button>
            </div>
            <div className="main-section-description">
              <h4>Add tags for solutions</h4>
              <p>Easy to search for solutions based on a specific stack</p>
              <button type="button" className="btn btn-tag">Enhancement</button>
            </div>
            <div className="main-section-comments">
              <i className="fas fa-comment"></i>
              <span>2</span>
            </div>
          </section>
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
        </main>
      </div>
    </div>
  );
}

export default App;
