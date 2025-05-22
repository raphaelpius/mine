"use client";
import React from "react";
import { useState,useEffect } from "react";
import axios, { Axios } from "axios";

export default function display(){
    const[getdata,setdata]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/retrieve1')
        .then((res)=>{
            console.log(res.data);
            setdata(res.data.result);
            alert('data retrieved');
        });
    });

    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>fname</th>
                    <th>password</th>
                </tr>
            </thead>
        </table>
        </>
    )
}