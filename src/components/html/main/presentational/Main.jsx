import FeedbackInfo from './FeedbackInfo';
import FeedbackSection from './FeedbackSection';
import MainHeader from './MainHeader';

export default function Main () {
  return (
    <main className="main">
      <MainHeader />
      <FeedbackSection />
      <FeedbackSection />
      <FeedbackSection />
      <FeedbackInfo />
    </main>
  )
}
