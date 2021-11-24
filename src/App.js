import './App.css';

import { Aside, Main } from './components/html';

export default function App() {
  return (
    <div className="container">
      <div className="main-container">
        <Aside />
        <Main />
      </div>
    </div>
  )
}
