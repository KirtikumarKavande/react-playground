import { useEffect, useState } from "react";

function useFetchData(url) {
    const[getData,setGetData]=useState([])
  useEffect(() => {
     fetchDataFromUrl()
  }, []);

  const fetchDataFromUrl = async () => {
     const res=await fetch(url)
     const data = await res.json()
     setGetData(data)
  }

  return {response:getData}
}
export default useFetchData;
