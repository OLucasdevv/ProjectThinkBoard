import { useState } from "react";
import upvoteIcon from '../assets/images/arrowUp.png';
import upvoteIconActive from '../assets/images/arrowUp-active.png';
import downvoteIcon from '../assets/images/arrowDown.png';
import downvoteIconActive from '../assets/images/arrowDown-active.png';


const FeedbackCard = ({ title, category, votes }) => {
  const [voteCount, setVoteCount] = useState(votes);

  function handleUpvote() {
    setVoteCount(prev => prev + 1);
  }

  function handleDownvote() {
    setVoteCount(prev => prev - 1);
  }

  const votesOptions = [
    {id: "up", icon: {upvoteIcon}, activeIcon: {upvoteIconActive}},
    {id: "down", icon: {downvoteIcon}, activeIcon: {downvoteIconActive}}
  ]


  return (
    <div className="cards">
      <h3>{title}</h3>
      <span>{category}</span>
      <p>{voteCount} votos</p>
      <button className = "upvoteButton" onClick={handleUpvote}>
        <img src={upvoteIcon} alt="upvote" />
      </button>
      <button className = "downvoteButton" onClick = {handleDownvote}>
        <img src={downvoteIcon} alt="downvote" />
      </button>
    </div>
  );
};

export default FeedbackCard;
