import React from "react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { getCategories } from '../App';



const FeedbackForm = ({handleAdd} ) => {
    const { t, i18n } = useTranslation();
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState ("");
    const [category, setCategory] = useState ("");
    const categories = getCategories(t);
    
    const handleSubmit = (e ) => {
        let date = new Date().toLocaleDateString()
        e.preventDefault ();
        if (!title || !message || !category) return;
        handleAdd ({title, message, category, date });
        setTitle ("");
        setMessage ("");
        setCategory ("");
        
    };

    

    return (
        <form onSubmit={handleSubmit} className = "submittingPlace">
                <input value = {title} onChange={(e) => setTitle (e.target.value)}  placeholder = "Título"/>
                <textarea value = {message} onChange={(e) => setMessage (e.target.value)} placeholder = "Digite sua Ideia aqui!" />
                <select value = {category} onChange= {(e) => setCategory (e.target.value)} placeholder = "selecione a categoria">
                    <option value = "">Selecione uma categoria</option>
                    {categories.map(cat => (
                      <option key = {cat.value} value = {cat.value}>{cat.label}</option>  
                    ))}
                    
                </select>
                <button type = "submit">Enviar</button>
        </form>
    );



};

export default FeedbackForm;
