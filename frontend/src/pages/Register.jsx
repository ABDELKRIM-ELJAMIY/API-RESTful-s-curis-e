import React from 'react';
import welcomeImage from '../assets/welcomepic.png';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#9193B1] px-4">
            <div className="flex gap-8">
                <div className="bg-[#F5F5F5] text-white p-8 rounded-xl shadow-[10px_10px_7px_rgba(21,0,255,0.25)]  flex flex-col items-center justify-center w-96 h-150">
                    <img
                        src={welcomeImage}
                        alt="Welcome"
                        className="mb-6 w-48 h-48 object-cover rounded-md shadow-lg"
                    />
                    <h1 className="text-2xl font-bold mb-2" style={{ color: '#1F41BB' }}>
                        Create Your Account
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-[10px_10px_7px_rgba(21,0,255,0.25)]  w-96 text-center">
                    <h2 className="text-2xl font-bold mb-2" style={{ color: '#1F41BB' }}>
                        Register here
                    </h2>
                    <p className="text-sm text-gray-700 mb-6 font-medium">
                        Join us and explore new experiences!
                    </p>

                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Nom"
                            className="px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            className="px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="Confirmer le mot de passe"
                            className="px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="text-white font-semibold py-2 rounded-md shadow-md transition duration-200"
                            style={{ backgroundColor: '#1F41BB' }}
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
