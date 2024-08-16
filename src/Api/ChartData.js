import React,{useState,useEffect} from 'react';
import axios from 'axios';

const ChartData=(url)=>{
    const [response,setResponse]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        const fetchUserData=async()=>{
        try{
            const result=await axios.get(url);
                setResponse(result.data);
                
            }catch(Error){
                setError(Error);
            }finally{
                setLoading(false);
            }
        };
        fetchUserData();
    },[url]);
    console.log("Responseeee"+response);
    console.log("Loading"+loading);
    return {response,loading,Error};
}
export default ChartData;