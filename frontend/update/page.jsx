//update fronend
"use client"
import { useState } from 'react';   
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function Update() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState(''); // Add ID state
    const router = useRouter();

    const update = async () => {
        try {
            if (!id || !name || !password) {
                console.error('Please fill all fields');
                return;
            }

            const response = await axios.post(`http://localhost:5000/update/${id}`, {
                name,
                password
            });

            if (response.data.message === 'updated') {
                console.log('Data updated successfully');
                router.push('/retrieve');
            }
        } catch (error) {
            console.error('Error updating data:', error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-6">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Update Profile</h2>
                <div className="space-y-4">
                    <input 
                        type="text" 
                        name="id" 
                        placeholder="Enter ID..." 
                        onChange={(e) => { setId(e.target.value) }} 
                        className="bg-amber-100 text-black w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                    />
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter name..." 
                        onChange={(e) => { setName(e.target.value) }} 
                        className="bg-amber-100 text-black w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter password..." 
                        onChange={(e) => { setPassword(e.target.value) }} 
                        className="bg-amber-100 text-black w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                    />
                    <button 
                        onClick={update} 
                        className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 font-semibold"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}