import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";


const Home = ({feedbacks,  handleAdd}) => {
  return (
    <div>
      <h2>Página Inicial</h2>
      <FeedbackList feedbacks={feedbacks} />
      
    </div>
  );
};


export default Home;
