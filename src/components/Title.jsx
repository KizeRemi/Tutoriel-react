// import de React
import React from 'react';

const TitlePage = ({ title = "Titre par défaut" }) => {
    return <h1>{title}</h1>
};

// On oublie pas de l'exporter
export default TitlePage;
