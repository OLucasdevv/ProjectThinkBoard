import FeedbackCard from "./FeedbackCard";

const FeedbackList = ({feedbacks}) => {
    if (feedbacks.length === 0) {
        return (
         <h1>Nenhum feedback ainda!</h1>   
        );
        
    } return (
        <div>
            {feedbacks.map((feedback) => (
                <FeedbackCard  
                    key={feedback.id}
                    title={feedback.text}
                    category={feedback.category}
                    votes={feedback.rating}   

                />
            ))}
        </div>
    );
   
    

};

export default FeedbackList;