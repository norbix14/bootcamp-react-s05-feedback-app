import FeedbackSection from '../../section/FeedbackSection';
import MainHeader from './MainHeader';

import { feedbacks } from '../../../../mocks/faker';

export default function Main () {
  const feeds = feedbacks(10);
  return (
    <main className="main">
      <MainHeader />
      {
        feeds.map((feed, i)=> (
          <FeedbackSection
            key={i}
            feedback={feed}
          />
        ))
      }
    </main>
  );
}
