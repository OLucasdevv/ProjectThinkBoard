import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";
import iconhome from "../assets/images/icon-home.png";
import "../App.css";
import { useState } from "react";
import SortOptions from "../components/SortOptions";
import { useTranslation } from 'react-i18next';

const Home = ({ feedbacks, updateFeedbackVotes }) => {
  const [sortType, setSortType] = useState("MostRecent");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { t, i18n } = useTranslation();

  let filteredFeedbacks = [...feedbacks];

  // filtra se tiver categoria escolhida
  if (selectedCategory) {
    filteredFeedbacks = filteredFeedbacks.filter(
      (f) => f.category === selectedCategory
    );
  }

  // ordena
  const sortedFeedbacks = filteredFeedbacks.sort((a, b) => {
    if (sortType === "MostRecent") {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  return (
    <div className="home">
      <div className="home-header">
        <img src={iconhome} alt="ícone home" />
        <h2>{t('Home.title')}</h2>
      </div>
      <p>{t('Home.subtitle')}</p>
      <SortOptions
        sortType={sortType}
        setSortType={setSortType}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <FeedbackList feedbacks={sortedFeedbacks}
      updateFeedbackVotes={updateFeedbackVotes} />
      
    </div>
  );
};

export default Home;
