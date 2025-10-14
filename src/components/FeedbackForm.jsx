import React from "react";
import { useState } from "react";



const FeedbackForm = ({handleAdd} ) => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState ("");
    const [category, setCategory] = useState ("");
    const handleSubmit = (e) => {
        e.preventDefault ();
        if (!title || !message || !category) return;
        handleAdd ({title, message, category});
        setTitle ("");
        setMessage ("");
        setCategory (""); 
    };

    const categories = [
    {value: "organization", label:"organização" },
    {value: "performance", label: "Performance"},
    {value: "bug", label: "relatar bug ou problema"},
    
  ];

    return (
        <form onSubmit={handleSubmit} className = "submittingPlace">
                <input value = {title} onChange={(e) => setTitle (e.target.value)}  placeholder = "Título"/>
                <textarea value = {message} onChange={(e) => setMessage (e.target.value)} placeholder = "Digite sua Ideia aqui!" />
                <select value = {category} onChange= {(e) => setCategory (e.target.value)} placeholder = "selecione a categoria">
                    <option value = "">Selecione uma categoria</option>
                    {categories.map(cat => (
                      <option key = {cat.value} value = {cat.label}>{cat.label}</option>  
                    ))}
                    
                </select>
                <button type = "submit">Enviar</button>

        </form>
    );



};

export default FeedbackForm;
