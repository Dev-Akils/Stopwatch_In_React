//useList2
import React,{useState,useEffect} from 'react';
import axios from 'axios';
const useFetch2=(url)=>{
  const [response,setResponse]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(()=>{
    const fetchUserData=async()=>{
      try{
        const result=await axios.get(url);
        setResponse(result.data.data);
      }catch(error){
        setError(error);
      }finally{
        setLoading(false);
      }
    };
    fetchUserData();
  },[url]);
  return {response,loading,error};
};
export default useFetch2;