export default function MainHeader () {
  return (
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
  )
}
