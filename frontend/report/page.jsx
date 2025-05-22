"use client";
import { useState,useEffect } from "react";
import axios from "axios";

 export default function app(){
    const[data,setdata]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/retrieve')
        .then((res)=>{
            console.log('res.data')
            setdata(res.data)
        });
    },[]);
    
const remove=(id)=>{
    console.log('data deleted')
    axios.post(`http://localhost:5000/${id}`)
    .then((res)=>{
        setdata(res.data)
        console.log(res.data)
        setdata(data.filter((fuck)=>fuck.id!=id));
    });
}
    return(
        <div className="flex justify-center my-50 ">
           <table>
            <thead>
                <tr >
                    <th className="bg-green-1000">userid</th>
                     <th>name</th>
                      <th>password</th>


                      <button className="mx-5">action</button>
                </tr>
            </thead>
            <tbody>
                {data.map((fuck)=>(
                    <tr key={fuck.userid}>
                        <td>{fuck.userid}</td>
                        <td>{fuck.name}</td>
                        <td>{fuck.password}</td>
                        <button onClick={()=> remove(fuck.id)} className="mx-4">delete</button>
                    </tr>
                ))}
            </tbody>
           </table>
        </div>
    );
 }