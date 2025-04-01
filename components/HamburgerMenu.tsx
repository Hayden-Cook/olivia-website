import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl md:text-6xl font-bold text-center">Welcome to Olivia's Marketing Website</h1>
            <p className="text-lg md:text-2xl text-center mt-4">
                Your one-stop solution for all your needs.
            </p>
        </div>
    );
};

export default Home;