"use client";
import React from "react";
import { useState } from "react";
import axios, { Axios } from "axios";
 
export default function sos(){
    const[getdata,setdata]=useState({});
    const insert =()=>{
        axios.post('http://localhost:5000/users1',getdata)
        .then((res)=>{
            console.log('datainserted well');
            alert('well');
        });

        
    }
    return(
        <>
        <input type="text" name="fname" placeholder="enter your name...." onChange={(e)=>{setdata({...getdata,[e.target.name]:e.target.value})}}required></input>
        <input type="password" name="password" placeholder="enter your name...." onChange={(e)=>{setdata({...getdata,[e.target.name]:e.target.value})}}required></input>
        <button onClick={insert}>insert</button>
        </>
    )
}