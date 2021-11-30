import { useMemo } from 'react';
import FeedbackSection from './section/feedbacks/FeedbackSection';

import { feedbacks } from './mocks/faker';

export default function Main () {
  const feeds = useMemo(() => feedbacks(10), []);

  return (
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
      {
        feeds.map((feed, i)=> (
          <FeedbackSection
            key={i}
            feedback={{...feed, id: i}}
          />
        ))
      }
    </main>
  );
}
