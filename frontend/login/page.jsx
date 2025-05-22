"use client"
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [data, setData] = useState({});
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', data);
            console.log(response.data);
            if (response.data.message === 'login successfully') {
                router.push('/');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Login</h1>
                <div className="space-y-4">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter Username..." 
                        onChange={handleInputChange}
                        className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"required
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter Password..." 
                        onChange={handleInputChange}
                        className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    required/>
                    <button 
                        onClick={handleLogin}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-semibold"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
