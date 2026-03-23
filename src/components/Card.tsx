import React from 'react';

interface CardProps {
    image: string;
    title: string;
    isActive?: boolean;
}

const Card: React.FC<CardProps> = ({ image, title, isActive = false }) => {
    return (
        <div className={`
            flex
            flex-col
            items-center
            bg-white/10
            backdrop-blur-sm
            rounded-lg
            p-1
            w-full
            h-full
            shadow-lg
            transition-all
            duration-500
            cursor-pointer
            ${isActive ? 'scale-105 border-2 border-white/50 opacity-100' : 'scale-100 opacity-50'}
        `}>
            <img src={image} alt={title} className="w-19/20 h-3/4 object-cover rounded-md mb-4 pt-2" />
            <h3 className="text-lg font-bold">{title}</h3>
        </div>
    );
};

export default Card;