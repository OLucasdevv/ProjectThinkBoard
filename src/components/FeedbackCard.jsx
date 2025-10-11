import { useState } from "react";
import upvoteIcon from '../assets/images/arrowUp.png';
import upvoteIconActive from '../assets/images/arrowUp-active.png';
import downvoteIcon from '../assets/images/arrowDown.png';
import downvoteIconActive from '../assets/images/arrowDown-active.png';


const FeedbackCard = ({ title, category}) => {
  const [voteCount, setVoteCount] = useState(null);

  function handleUpvote() {
    if (activeVote !== 'upvote') {
      setVoteCount(prev => (prev === null ? 1 : prev + 1));
      setActiveVote ('upvote');
    }
    
  }

  function handleDownvote() {
    if (activeVote !== 'downvote') {
    setVoteCount (prev => {
      if (prev === null || prev === 1) return null;
      return prev - 1;
    });
    setActiveVote('downvote')
  }
  }
  const [activeVote, setActiveVote] = useState(null);
  const votesOptions = [
    { id: "upvote", icon: upvoteIcon, activeIcon: upvoteIconActive, action: handleUpvote },
    { id: "downvote", icon: downvoteIcon, activeIcon: downvoteIconActive, action: handleDownvote },
  ]


  return (
    <div className="cards">
      <h3>{title}</h3>
      <span>{category}</span>  
      <div className="votingPlace">
        {votesOptions.map((vote) => (
          <button 
            key={vote.id}
            className={vote.id}
            onClick={() => {
              setActiveVote(vote.id);
              vote.action();
             

            }}
          >
            <img
              src={activeVote === vote.id ? vote.activeIcon : vote.icon}
              alt={vote.id}
            />
            {vote.id === 'upvote' ?  voteCount : ''}
            
          </button>
        ))}

      </div>
    </div>
  );
};

export default FeedbackCard;
