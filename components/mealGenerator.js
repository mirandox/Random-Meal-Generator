import React, { useState } from 'react';
import fetchMealData from '../services/api';
import MealCard from './mealCard';

const MealGenerator = () => {

    const [meal, setMeal] = useState([]);

    const handleClick = () => {
        fetchMealData().then(response => {
            setMeal(response);
        });
    }
        
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-3xl font-bold">The Meals</h1>
            <button className='bg-blue-600 p-3 rounded-lg text-white font-bold' onClick={handleClick}>Generate</button>
            <MealCard meal={meal} />
        </div>
    );
}

export default MealGenerator;