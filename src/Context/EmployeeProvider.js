import React, { createContext, useState, useEffect } from 'react';

export const EmployeeContext = createContext([]);

export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployee] = useState(() => {
        // Récupérer les données depuis le Local Storage lors de l'initialisation du contexte
        const savedEmployees = localStorage.getItem('employees');
        return savedEmployees ? JSON.parse(savedEmployees) : [];
    });

    useEffect(() => {
        // Sauvegarder les données dans le Local Storage chaque fois qu'elles sont mises à jour
        localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees]);

    return (
        <EmployeeContext.Provider value={{ employees, setEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};