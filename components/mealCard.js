import React from 'react';

const MealCard = ({ meal }) => {
    return (
        <div className="max-w-sm bg-white p-6 mt-5 rounded-lg shadow-sm border border-gray-200">
            <div className="text-center">
                <span className="block text-xl font-bold text-slate-700">{meal.strMeal}</span>
                <span className="block text-slate-500 text-sm font-normal">{meal.strCategory}</span>
            </div>
            <div className="text-center">
                <img className="rounded-t-lg" src={meal.strMealThumb} alt={meal.strMeal} />
                <span className="text-slate-700 text-sm font-medium">Instructions:</span>
                <span className="block text-slate-500 text-sm font-normal">{meal.strInstructions}</span>
            </div>
        </div>
    );
}

export default MealCard;