import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";


const Home = ({feedbacks, addFeedback}) => {
  return (
    <div>
      <h2>Página Inicial</h2>
      <FeedbackList feedbacks={feedbacks} />
      <FeedbackForm handleAdd={addFeedback} />
    </div>
  );
};


export default Home;
