import { useState } from "react";
import upvoteIcon from '../assets/images/arrowUp.png';
import upvoteIconActive from '../assets/images/arrowUp-active.png';
import downvoteIcon from '../assets/images/arrowDown.png';
import downvoteIconActive from '../assets/images/arrowDown-active.png';
import calendarIcon from '../assets/images/calendar-icon.png';
import { useTranslation } from 'react-i18next';

const FeedbackCard = ({ title, category, message, date }) => {
  const { t, i18n } = useTranslation();
  const [voteCount, setVoteCount] = useState(null);
  const [activeVote, setActiveVote] = useState(null);

  function handleUpvote() {
    if (activeVote !== 'upvote') {
      setVoteCount(prev => (prev === null ? 1 : prev + 1));
      setActiveVote('upvote');
    }
  }

  function handleDownvote() {
    if (activeVote !== 'downvote') {
      setVoteCount(prev => {
        if (prev === null || prev === 1) return null;
        return prev - 1;
      });
      setActiveVote('downvote');
    }
  }

  const votesOptions = [
    { id: "upvote", icon: upvoteIcon, activeIcon: upvoteIconActive, action: handleUpvote },
    { id: "downvote", icon: downvoteIcon, activeIcon: downvoteIconActive, action: handleDownvote },
  ];

  const VotingButtons = ({ votesOptions }) => (
    <>
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
            {vote.id === 'upvote' ? voteCount : ''}
          </button>
        ))}
      </div>
      <div className="datePlace">
        <img src={calendarIcon} alt="calendarIcon" width="20" height="20" />
        <p>{date}</p>
      </div>
    </>
  );

  return (
    <div className="cards">
      <h3>{title}</h3>
      <p>{message}</p>
      <span>{category}</span>
      <VotingButtons votesOptions={votesOptions} />
    </div>
  );
};

export default FeedbackCard;
