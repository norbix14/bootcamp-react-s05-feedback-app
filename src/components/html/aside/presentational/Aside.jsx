export default function Aside () {
  return (
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
  )
}
