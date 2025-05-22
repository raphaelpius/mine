"use client"
import { useEffect, useState } from "react";

import axios from "axios";
import { useParams,useRouter } from "next/navigation";


export default function app(){
    const Router=useRouter();
const[data,setData]=useState([]);
useEffect(()=>{
    axios.get('http://localhost:5000/retrieve')
.then((res)=>{
     setData(res.data);
        console.log(res.data);
       
    
}
);
        

},[]);

const delete1=(id)=>{
    console.log('data deleted');
    axios.post (`http://localhost:5000/delete/${id}`)
    .then((res)=>{
        setData(res.data);
        console.log(res.data)
       setData(data.filter((pio)=>pio.id!=id));

        });
    }




    return(
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-amber-50 p-8">
        <div className="overflow-x-auto shadow-xl rounded-lg bg-white">
            <table className="w-full table-auto">
                <thead className="bg-amber-500">
                    <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">ID</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Password</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Date</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((pio) => (
                        <tr key={pio.id} className="border-b border-amber-100 hover:bg-amber-50 transition-colors">
                            <td className="px-6 py-4 text-sm text-gray-700">{pio.id}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{pio.name}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{pio.password}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{pio.date}</td>
                            <td className="px-6 py-4">
                                <button 
                                    onClick={() => delete1(pio.id)}
                                    className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
}
