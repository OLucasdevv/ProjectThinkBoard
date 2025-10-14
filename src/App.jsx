import { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Ideas from "./pages/Ideas";
import AboutUs from "./pages/AboutUs";
import './App.css';
import logo from './assets/images/thinkboard-logo.png';
import homeIcon from './assets/images/house-icon.png';
import homeActiveIcon from './assets/images/house-icon-active.png';
import categoriesIcon from './assets/images/categories.png';
import categoriesActiveIcon from './assets/images/categories-active.png';
import ideasIcon from './assets/images/my-ideas.png';
import ideasActiveIcon from './assets/images/my-ideas-active.png';
import plusSimbol from  './assets/images/plus-simbol.png';
import FeedbackForm from "./components/FeedbackForm";


const App = () => {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, title: "Automatização de relatórios de desempenho mensal", message: `Hoje, a comunicação entre equipes é fragmentada: feedbacks sobre projetos, processos e resultados ficam espalhados por e-mails e chats, dificultando o acompanhamento e a análise de melhorias. A proposta é criar uma plataforma interna onde todos os colaboradores possam registrar feedbacks em tempo real, avaliando iniciativas, sugerindo melhorias e reconhecendo boas práticas.
A plataforma teria dashboards que mostram tendências, pontos críticos e evolução das equipes, permitindo que gestores tomem decisões mais rápidas e embasadas. Também incluiria notificações inteligentes, sugestões automáticas de melhoria com base nos feedbacks mais recorrentes e integração com sistemas internos como CRM e ERP, garantindo que nenhuma informação se perca e que a melhoria contínua se torne parte da cultura da empresa`, category: "organization"},
    { id: 2, title: "title text", message: "another test text", category: "performance"},
  ]);

  const addFeedback = (newFeedback) => {
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  const menuItems = [
    { id: 'home', label: 'Página Inicial', icon: homeIcon, activeIcon: homeActiveIcon, path: '/' },
    { id: 'categories', label: 'Categorias', icon: categoriesIcon, activeIcon: categoriesActiveIcon, path: '/categories' },
    { id: 'ideas', label: 'Minhas Ideias', icon: ideasIcon, activeIcon: ideasActiveIcon, path: '/ideas' },
    { id: 'aboutUs', label: 'Sobre o ThinkBoard', icon: ideasIcon, activeIcon: ideasActiveIcon, path: '/aboutUs' },
  ];
  const [showForm, setShowForm] = useState(false);

    function  SubmittingButton ({ onClick }) {
      return (
        <button onClick={onClick} className = "submittingButton" >
          <img src = {plusSimbol} alt = "add-simbol" />
          <span className="tooltip-text">Adicionar Ideia</span>
        </button>
      );
    };


  
  return (
    
    <div className="app-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive ? item.activeIcon : item.icon}
                      alt={item.label}
                    />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {showForm  && (
  <div className = "modal-overlay" onClick={() => setShowForm(false)}>
    <div className = "modal-content" onClick={(e) => e.stopPropagation()}>
      <FeedbackForm handleAdd={addFeedback} />
    </div>
  </div>
)}

      {/* Main Content */}
      <div className="main-content">
        <div className="navbar">     
          <img src={logo} alt="ThinkBoard Logo" />     
          <SubmittingButton onClick={() => setShowForm(true)} />  
        </div>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home feedbacks={feedbacks} handleAdd={addFeedback} />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;



