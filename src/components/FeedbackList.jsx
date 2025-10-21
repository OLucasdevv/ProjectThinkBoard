import FeedbackCard from "./FeedbackCard";
import { useTranslation } from 'react-i18next';


const FeedbackList = ({ feedbacks }) => {
  const { t, i18n } = useTranslation();
  if (!feedbacks || feedbacks.length === 0) {
    return <h1>Nenhum feedback ainda!</h1>;
  }

  return (
    <div>
      {feedbacks.map((feedback) => (
        <FeedbackCard
          key={feedback.id}
          title={feedback.title}
          message={feedback.message}
          category={feedback.category}
          date={feedback.date}
        />
      ))}
    </div>
  );
};

export default FeedbackList;