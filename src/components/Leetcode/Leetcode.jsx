import React from 'react'
import {useEffect , useState } from 'react'
import {useLoaderData} from 'react-router-dom'

// In this section we will learn two methods to call the api in any component path 
// The first method is simple that is using useEffect hook which is shown below in commented lines 

export default function Leetcode(){

    const data = useLoaderData()

    // const [ data , setData ] = useState( {} )
    // if you write .then() callback in curly brackets then you need to write return res.json()
    // useEffect( ()=>{
    //     fetch( 'https://alfa-leetcode-api.onrender.com/chetansahu2307/solved' )
    //     .then( (res) => res.json() ) 
    //     .then( (res)=>{
    //         setData(res) 
    //         console.log(data)
    //     })
            
    // } , [] )

    // Now the second approach to fetch any api is more optimized way 
    // For this we need to create a function which is created below at last

    return (
        <>
        <div>
            Hello this is Chetan's Leetcode Profile 
        </div>
        <div>
            Total problem solved {data.solvedProblem} Easy:{ data.easySolved} Medium:{data.mediumSolved} Hard:{data.hardSolved}
        </div>
        </>
    );
}

export const Leetcodeinfo = async ()=>{
    const res = await fetch( 'https://alfa-leetcode-api.onrender.com/chetansahu2307/solved')
    return res.json()
}