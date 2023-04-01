import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const DataContext = React.createContext([]);
const baseURL1="http://localhost:4000/addData";
const baseURL2="http://localhost:4000/getData";

let flag=false;

export function DataList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    //console.log(data);
    console.log(data);
    if(flag){
    axios.post(baseURL1,data).then((response) => {
      console.log(response.data);
  });
}
  
  }, [data]);

  useEffect(()=>{
    flag=true;
    axios.get(baseURL2).then((response) => {
      setData(response.data);
    });
  },[])
  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
}