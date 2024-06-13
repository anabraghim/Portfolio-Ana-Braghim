import React from 'react'
import { Home } from "./pages/Home";
import './App.css'

export function App(){
    return(
        <>
        <div className='blur b2'></div>
        <div className='blur b1'></div>
        <div className='blur b3'></div>
        <div className='blur b4'></div>
        <Home/>
        </>
    )
}