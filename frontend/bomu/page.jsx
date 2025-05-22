"use client"
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function app(){
const[data,setData]=useState({});
const insert=()=>{
    console.log(data)
    axios.post('http://localhost:5000/insert',data)
    .then((res)=>{
console.log(res.data);

    })
             
    }
  



    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-pink-500 p-8">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Insert Data</h2>
                <div className="space-y-4">
                    <input 
                        type="text"
                        name="username" 
                        placeholder="Enter name..." 
                        onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                    />
                    <input 
                        type="password"
                        name="password" 
                        placeholder="Enter password..." 
                        onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                    />
                    <input 
                        type="date"
                        name="date" 
                        placeholder="Enter date..." 
                        onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                    />
                    <button 
                        onClick={insert}
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 font-semibold"
                    >Insert</button>
                       
                    
                </div>
            </div>
        </div>
    );
}