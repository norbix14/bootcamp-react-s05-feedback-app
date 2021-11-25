import FeedbackSection from '../../section/FeedbackSection';
import MainHeader from './MainHeader';

export default function Main () {
  return (
    <main className="main">
      <MainHeader />
      <FeedbackSection />
      <FeedbackSection />
      <FeedbackSection />
    </main>
  );
}
