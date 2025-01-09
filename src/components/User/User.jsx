import React from 'react'
import { useParams } from 'react-router-dom';

export default function User(){

    const {userid} = useParams()
    // Always remember that the variable name should be same in main.jsx and user.jsx

    return (
        <div className=' text-center bg-red-400 w-auto'>
        This is User: {userid} 
        </div>
    );
}