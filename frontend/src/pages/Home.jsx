import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/welcomepic.png'; // remplace avec ton image réelle

const Home = () => {
    return (
        <div className="min-h-screen bg-[#9193B1] flex items-center justify-center px-6">
            <div className="bg-white rounded-3xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-10 max-w-5xl">

                {/* Image de bienvenue */}
                <img
                    src={heroImage}
                    alt="Welcome"
                    className="w-60 h-60 object-cover rounded-xl shadow-md"
                />

                {/* Texte d'accueil */}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-extrabold mb-4 text-[#1F41BB]">
                        Bienvenue sur 404.js Auth
                    </h1>
                    <p className="text-gray-700 mb-6 text-lg max-w-md">
                        Votre passerelle sécurisée pour gérer vos applications MERN. Connectez-vous ou créez un compte pour commencer.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            to="/login"
                            className="bg-[#1F41BB] text-white px-6 py-2 rounded-md shadow hover:bg-[#1c39a1] transition duration-300"
                        >
                            Connexion
                        </Link>
                        <Link
                            to="/register"
                            className="bg-white border border-[#1F41BB] text-[#1F41BB] px-6 py-2 rounded-md hover:bg-[#f0f0ff] transition duration-300"
                        >
                            Créer un compte
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
